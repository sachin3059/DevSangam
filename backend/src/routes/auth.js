const express = require("express");
const validator = require("validator");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const vvalidateSignUpData = require("../utils/validation")

const authRouter = express.Router();


authRouter.post('/signup', async (req, res) => {
    try {
        const isValidated = validateSignUpData(req);
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        
        // new instance of user model;
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        await user.save();
        res.send("User Added successfully !");  
    } catch (error) {
        res.status(400).send('Error saving the user: ' + error.message);
    }
});


authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Email is mandatory");
        } else if (!password) {
            throw new Error("Password is compulsory");
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error("Email ID is not present in the database");
        }

        const isPasswordValid = await user.validatePassword(password);
        if (isPasswordValid) {
            const token = await user.getJWT();
            res.cookie("token", token);
            res.send("User login successful!");
        } else {
            throw new Error("Password is not correct");
        }
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
    }
});


authRouter.post("/logout",  async (req, res) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
        });
        res.send('user logout successfully');
    } catch (error) {
        res.status(400).send("error while logout" + error.message)
    }
})

module.exports = authRouter;