const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userModel.js");
const { validateSignUpData , validateLoginData  } = require("../utils/validation.js");

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
    try {
        const validationResult = validateSignUpData(req);
        if(!validationResult.isValid){
            return res.status(400).json({
                success: false,
                message: validationResult.errors,
            });
        }

        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        await user.save();
        res.status(200).json({
            success: true,
            message: 'User signUp successfully!',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    };
});


authRouter.post("/login", async (req, res) => {
    try {
        const validationResult = validateLoginData(req);
        if(!validationResult.isValid){
            return res.status(400).json({
                success: false,
                message: validationResult.errors,
            });
        };

        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Credentials!',
            });
        };

        const isPasswordValid = await user.validatePassword(password);
        if(!isPasswordValid){
            return res.status(400).json({
                success: false,
                message: 'Invalid Credentials!',
            });
        }

        const token = await user.getJWT();
        if(!token){
            return res.status(400).json({
                success: false,
                message: 'Invalid token',
            });
        };
        res.cookie("token", token);
        res.status(200).json({
            success: true,
            message: 'User login Successfully! ',
            user,
        });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    };
});


authRouter.post("/logout",  async (req, res) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
        });
        res.status(200).json({
            success: true,
            message: 'User logout successfully!',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    };
});

module.exports = authRouter;