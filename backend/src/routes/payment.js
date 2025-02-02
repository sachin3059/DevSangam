const express = require("express");
const { userAuth } = require("../middlewares/userAuth");
const paymentRouter = express.Router();
const razorpayInstance = require("../utils/razorpay");
const Payment = require("../models/paymentModel");
const { membershipAmount } = require("../utils/constants");
const User = require("../models/userModel");

const {validateWebhookSignature} = require('razorpay/dist/utils/razorpay-utils')

paymentRouter.post("/payment/create", userAuth, async(req, res) => {
    try {
        const {membershipType} = req.body;
        const {firstName, lastName, email } = req.user
        const order = await razorpayInstance.orders.create({
            amount: membershipAmount[membershipType] * 100,
            currency: "INR",
            receipt: "receipt#1",
            partial_payment: false,
            notes: {
              firstName,
              lastName,
              email,
              membershipType,
            }
          });

        // save it in my database
        console.log(order);

        const payment = new Payment({
            userId: req.user._id,
            orderId: order.id,
            status: order.status,
            amount: order.amount,
            currency: order.currency,
            receipt: order.receipt,
            notes: order.notes,
        });

        const  savedPayment = await payment.save();

        // return back my order details to frontend
        res.status(200).json({...savedPayment.toJSON(), keyId: process.env.RAZORPAY_KEY_ID}) ;

    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        });
    }

});


paymentRouter.post("/payment/webhook", async (req, res) => {
    try {
        const webhookSignature = req.get("X-Razorpay-Signature");
        const isWebhookValid = validateWebhookSignature(
            JSON.stringify(req.body),
            webhookSignature,
            process.env.RAZORPAY_WEBHOOK_SECRET
        );

        if(!isWebhookValid){
            return res.status(400).json({
                success: false,
                message: ""
            })
        }

        // update my payment status in db
        const paymentDetails = req.body.payload.payment.entity;
        const payment = await Payment.findOne({orderId: paymentDetails.order_id});
        payment.status = paymentDetails.status
        await payment.save();

        const user = await User.findOne({_id: payment.userId});
        user.isPremium = true;
        user.membershipType = payment.notes.membershipType
        // update the user as premium
        // return success response to razorpay

        // if(req.body.event === "payment.captured"){

        // }

        // if(req.body.event === "payment.failde"){

        // }
        return res.status(200).json({
            success: true,
            message: "webhook received successfully"
        });

        
    } catch (error) {
        
    }
} )





module.exports = paymentRouter;