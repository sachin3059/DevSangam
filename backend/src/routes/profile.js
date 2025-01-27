const express = require("express");
const profileRouter = express.Router();
const bcrypt = require('bcrypt');
const { userAuth } = require("../middlewares/userAuth");
const { validateEditProfileData } = require("../utils/validation");


profileRouter.get("/profile/view", userAuth, async(req, res) => {
    try {
        const user = req.user;
        res.send(user);    
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
    } 
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
    try {
        if(!validateEditProfileData(req)){
          throw new Error("invalid edit data");
        }
        const loggedInUser = req.user;

        Object.keys(req.body).forEach(key => loggedInUser[key] = req.body[key]);

        await loggedInUser.save();

        res.json({
          message: `${loggedInUser.firstName}, profile update successfully`,
          data: loggedInUser,
        });

    } catch (error) {
        res.status(400).send("Eror: " + error.message);
        
    }
});


profileRouter.patch("/profile/password", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;
        //console.log(loggedInUser);
        const {currentPassword , newPassword} = req.body;

        if(!currentPassword || !newPassword){
            throw new Error("All fields are mandetory: " + error.message);
        }

        const isValidCurrentPassword = await bcrypt.compare(currentPassword, loggedInUser.password);

        if(!isValidCurrentPassword){
            throw new Error("User current password is not correct " + error.message);
        }

        const newHashedPassword = await bcrypt.hash(newPassword, 10);
        loggedInUser.password = newHashedPassword;

        await loggedInUser.save();
        //console.log(loggedInUser);

        res.json({
            message: `${loggedInUser.firstName}: your password updated successfully!`,
            data : loggedInUser
        });

    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
});






module.exports = profileRouter;