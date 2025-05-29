import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: [
      'Welcome_Email',
      'OTP_Verification_Email',
      'Subscription_Expiry_Email',
      'Forget_Password_Email',
      'Reset_Password_Email_successfully'
    ]
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const EmailTemplate = mongoose.model('EmailTemplate', templateSchema);
