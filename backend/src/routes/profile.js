const express = require("express");
const profileRouter = express.Router();
const bcrypt = require('bcrypt');
const { userAuth } = require("../middlewares/userAuth");
const { validateEditProfileData } = require("../utils/validation");


profileRouter.get("/profile/view", userAuth, async(req, res) => {
    try {
        const user = req.user;
        if(!user){
            return res.status(400).json({
                success: false,
                message: 'User not find',
            });
        };
        
        res.status(200).json({
            success: true,
            message: 'User Profile find successfully! ',
            user: user,
        });   
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    };
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
    try {
        if(!validateEditProfileData(req)){
          return res.status(400).json({
            success: false,
            message: 'Enter valid input',
          });
        };

        const loggedInUser = req.user;
        Object.keys(req.body).forEach(key => loggedInUser[key] = req.body[key]);

        await loggedInUser.save();

        res.status(200).json({
            success: true,
            message: `${loggedInUser.firstName} your profile updated successfully`,
            data: loggedInUser,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });  
    };
});

profileRouter.patch("/profile/password", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;
        const {currentPassword , newPassword} = req.body;

        if(!currentPassword || !newPassword){
            return res.status(400).json({
                success: false,
                message: 'All fields are mandetory',
            });
        };

        const isValidCurrentPassword = await bcrypt.compare(currentPassword, loggedInUser.password);

        if(!isValidCurrentPassword){
            return res.status(400).json({
                success: false,
                message: 'Invalid current password',
            });
        };

        const newHashedPassword = await bcrypt.hash(newPassword, 10);
        loggedInUser.password = newHashedPassword;

        await loggedInUser.save();

        res.status(200).json({
            success: true,
            message: `${loggedInUser.firstName}: your password updated successfully!`,
            data : loggedInUser
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    };
});


module.exports = profileRouter;