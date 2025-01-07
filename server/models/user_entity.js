import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'] },
    name: { type: String, required: true },
    password: { type: String, required: function () { return this.authSource === 'self'; } },
    authSource: { type: String, enum: ['self', 'google'], default: 'self' },
    role: { type: String, enum: ['admin', 'user', 'superadmin'], default: 'user' },
    picture: { type: String },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (this.authSource === 'self' && this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  if (this.authSource === 'self') return await bcrypt.compare(password, this.password);
  return true;
};

const User = mongoose.model('User', userSchema);

export default User;
