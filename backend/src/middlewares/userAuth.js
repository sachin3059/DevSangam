const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if(!token){
            return res.status(401).json({
                success: false,
                message: 'Please login!',
            });
        };

        const decodedObj = await jwt.verify(token, "dev@Sangam123" ); 
        const { _id } = decodedObj;
        const user = await User.findById(_id);

        if(!user){
            return res.status(400).json({
                success: false,
                message: 'Something went wrong',
            });
        };

        req.user = user;
        next();
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    };
};

module.exports = {
    userAuth,
}