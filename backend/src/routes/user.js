const express = require("express");
const userRouter = express.Router();

const Connection = require("../models/connectionModel");
const { userAuth } = require("../middlewares/userAuth");

userRouter.get("/user/request/received", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;

        const connectionRequest = await Connection.find({
            toUserId: loggedInUser._id,
            status: 'interested',
        }).populate("fromUserId", ["firstName", "lastName", "gender", "bio", "skills", "ProfilePicture"]);

        res.status(200).json({
            success: true,
            message: 'User connection received',
            data: connectionRequest,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    };
});

userRouter.get("/user/connections", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;
        const USER_SAFE_DATA = ["firstName", "lastName", "gender", "skills", "ProfilePicture"];

        const connectionRequest = await Connection.find({
             $or:[
                {toUserId: loggedInUser._id , status: "accepted"},
                {fromUserId: loggedInUser._id, status: "accepted"},
             ],
        }).populate("fromUserId", USER_SAFE_DATA).populate("toUserId", USER_SAFE_DATA);

        const data = connectionRequest.map((row) => {
            if(row.fromUserId._id.toString() === loggedInUser._id.toString()){
                return row.toUserId
            }
            return row.fromUserId
        });

        res.status(200).json({
            success: true,
            message: `${loggedInUser.firstName}, connections`,
            data: data, 
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = userRouter;