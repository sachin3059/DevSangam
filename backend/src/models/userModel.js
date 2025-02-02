const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      index: true, // indexing on first name
      minlength: [2, 'First name must be at least 2 characters long'],
      maxlength: [50, 'First name cannot exceed 50 characters'],
      trim: true,
    },
    lastName: {
      type: String,
      minlength: [2, 'Last name must be at least 2 characters long'],
      maxlength: [50, 'Last name cannot exceed 50 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error(`Invalid email address: ${value}`);
        }
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'],
      maxlength: [100, 'Password cannot exceed 16 characters'],
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error(`Password is not strong enough: password must contain [minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1]:  ${value} ` );
        }
      },
    },
    bio: {
      type: String,
      maxlength: [500, 'Bio cannot exceed 500 characters'],
      default: '',
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message: `{VALUE} is not a valid gender type`
      }
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    membershipType: {
      type: String,
    },
    location: {
      type: String,
      maxlength: [100, 'Location cannot exceed 100 characters'],
      default: '',
    },
    skills: [
      {
        type: [String]
      },
    ],
    interests: [
      {
        type: String,
        trim: true,
      },
    ],
    profilePicture: {
      type: String,
      default:
        'https://t4.ftcdn.net/jpg/02/89/59/55/360_F_289595573_wCKO1nxxx7HGk69z5szjvSOqPnZVTfTG.jpg',
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error(`Invalid profile picture URL: ${value}`);
        }
      },
    },
    preferences: {
      matchBySkills: { type: Boolean, default: true },
      matchByLocation: { type: Boolean, default: false },
    },
    socialLinks: {
      github: {
        type: String,
        default: '',
        validate(value) {
          if (value && !validator.isURL(value)) {
            throw new Error(`Invalid GitHub URL: ${value}`);
          }
        },
      },
      linkedin: {
        type: String,
        default: '',
        validate(value) {
          if (value && !validator.isURL(value)) {
            throw new Error(`Invalid LinkedIn URL: ${value}`);
          }
        },
      },
      portfolio: {
        type: String,
        default: '',
        validate(value) {
          if (value && !validator.isURL(value)) {
            throw new Error(`Invalid portfolio URL: ${value}`);
          }
        },
      },
    },
  },
  {
    timestamps: true, 
  }
);


userSchema.index({firstName: 1, lastName: 1});


userSchema.methods.getJWT = async function () {
  const user = this;
  const token = await jwt.sign({_id: user._id}, "dev@Sangam123");
  return token;
}

userSchema.methods.validatePassword = async function(passwordInputByUser) {
  const user = this;
  const passwordHash = user.password;
  const isPasswordValid = await bcrypt.compare(passwordInputByUser, passwordHash);
  return isPasswordValid;
}

module.exports= mongoose.model('User', userSchema);
