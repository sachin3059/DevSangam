const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },

  bio: {
    type: String,
    maxlength: 500,
    default: '',
  },
  location: {
    type: String,
    maxlength: 100,
    default: '',
  },
  skills: [
    {
      type: String,
      trim: true,
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
    default: '',
  },


  preferences: {
    matchBySkills: { type: Boolean, default: true },
    matchByLocation: { type: Boolean, default: false },
  },
  socialLinks: {
    github: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    portfolio: { type: String, default: '' },
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;