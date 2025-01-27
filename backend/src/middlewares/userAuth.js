const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        //console.log(token);
        if(!token){
            throw new Error('token is not valid');
        }

        const decodedObj = await jwt.verify(token, "dev@Sangam123" );
        //console.log(decodedObj);

        const {_id} = decodedObj;

        const user = await User.findById(_id);

        if(!user){
            throw new Error('user not present');
        }

        req.user = user;
        next();
        
    } catch (error) {
        res.status(400).send("Error: " + error.message);
        
    }
}

module.exports = {
    userAuth,
}