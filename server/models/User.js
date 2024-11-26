const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
    isActive: {
      type: Boolean,
      default: true, // For soft deletion or deactivation of users
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Index for efficient email lookups
userSchema.index({ email: 1 });

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err); // Pass the error to the middleware stack
  }
});

// Method to check password validity
userSchema.methods.isValidPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Soft delete or deactivate user method
userSchema.methods.deactivate = async function () {
  this.isActive = false;
  await this.save();
};

module.exports = mongoose.model('User', userSchema);