const validator = require("validator");

const validateSignUpData = (req) => {
    const { firstName, lastName, email, password } = req.body;
    const errors = [];
    if (!firstName || !lastName) {
        errors.push("First name and last name are required.");
    }

    if (!email || !validator.isEmail(email)) {
        errors.push("A valid email address is required.");
    }

    if (!password || !validator.isStrongPassword(password)) {
        errors.push(
            "Password must contain at least 8 characters, including an uppercase letter, a number, and a special character."
        );
    }

    if (errors.length > 0) {
        return {
            isValid: false,
            errors,
        };
    }

    return {
        isValid: true,
        errors: [],
    };
};

const validateLoginData = (req) => {
    const { email , password } = req.body;
    const errors = [];

    if(!email || !validator.isEmail(email)){
        errors.push('Valid email address is required');
    };

    if(!password){
        errors.push('Password is required');
    };

    if(errors.length > 0){
        return {
            isValid: false,
            errors,
        };
    };

    return {
        isValid: true,
        errors: [],
    };
};

const validateEditProfileData = (req) => {
    const allowedEditFields = [
        "firstName",
        "lastName",
        "email",
        "bio",
        "gender",
        "skills",
        "profilePicture",
        "socialLinks",
        "achievements",
        "experience"
    ]

    const isEditAllowed = Object.keys(req.body).every(field => allowedEditFields.includes(field));
    return isEditAllowed;
}


module.exports = {
    validateSignUpData,
    validateLoginData,
    validateEditProfileData,
};
