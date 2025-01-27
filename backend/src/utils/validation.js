const validator = require("validator");

const validateSignUpData = (req) => {
    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName){
        throw new Error('Name is not valid');
    }

    if(!validator.isEmail(email)){
        throw new Error('Email is not valid');
    }

    if(!validator.isStrongPassword(password)){
        throw new Error("Enter strong password");
    }
};



const validateEditProfileData = (req) => {
    const allowedEditFields = [
        "firstName",
        "lastName",
        "email",
        "bio",
        "gender",
        "skills",
        "profilePicture"
    ]

    const isEditAllowed = Object.keys(req.body).every(field => allowedEditFields.includes(field));

    return isEditAllowed;
}


module.exports = {
    validateSignUpData,
    validateEditProfileData,
};
