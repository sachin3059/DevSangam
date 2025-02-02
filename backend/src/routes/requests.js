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
                success: false,
                message: "invalid status type: " + status,
            });
        }

        const existingConnectionRequest = await Connection.findOne({
            $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId },
            ],
        });
        
        if(existingConnectionRequest){
            return res.status(400).json({
                success: false,
                message: "connection request already present!"
            });
        };


        const toUser = await User.findById(toUserId);

        if(!toUser){
            return res.status(400).json({
                success: false,
                message: "user not found!"
            });
        };

        const connectionRequest = new Connection({
            fromUserId,
            toUserId,
            status,
        });

        const data = await connectionRequest.save();

        res.status(200).json({
            success: true,
            message: "Connection request send successfully!",
            data,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    };
});

requestRouter.post("/request/review/:status/:requestId", userAuth, async (req, res) =>{
    try {
        const loggedInUser = req.user;
        const { status, requestId } = req.params;
        const allowedStatus = ["accepted", "rejected"];
        if(!allowedStatus.includes(status)){
            return res.status(400).json({
                message: 'Status is not allowed'
            });
        };
        //console.log(loggedInUser);

        const connectionRequest = await Connection.findOne({
            _id: requestId,
            toUserId: loggedInUser._id,
            status: "interested",
        }); 
        //console.log(connectionRequest);

        if(!connectionRequest){
            return res.status(400).json({
                success: false,
                message: 'There is no connection between them',
            });
        };

        connectionRequest.status = status;

        await connectionRequest.save();

        res.status(200).json({
            success: true,
            message: `Connection successfully: ${status}`,
            data: connectionRequest,
        });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    };
});

module.exports = requestRouter;