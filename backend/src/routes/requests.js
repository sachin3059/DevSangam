const express = require("express");
const { userAuth } = require("../middlewares/userAuth");
const User = require("../models/userModel");
const Connection = require("../models/connectionModel");
const requestRouter = express.Router();

requestRouter.post('/request/send/:status/:toUserId', userAuth,  async (req, res) => {
    try {
        const fromUserId = req.user._id;
        const toUserId = req.params.toUserId;
        const status = req.params.status;

        const allowedStatus = ["ignored", "interested"];
        if(!allowedStatus.includes(status)){
            return res.status(400).json({
                message: "invalid status type " + status
            });
        }

        // check if there is an existing connectionrequest:
        const existingConnectionRequest = await Connection.findOne({
            $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId },
            ],
        });
        
        if(existingConnectionRequest){
            return res.status(400).json({
                message: "connection request already present!"
            });
        };


        const toUser = await User.findById(toUserId);

        if(!toUser){
            return res.status(400).json({
                message: "user not found!"
            });
        };

        const connectionRequest = new Connection({
            fromUserId,
            toUserId,
            status,
        });

        const data = await connectionRequest.save();

        res.json({
            message: "Connection request send successfully!",
            data,
        });

    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
});

module.exports = requestRouter;