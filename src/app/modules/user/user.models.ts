import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import confiq from '../../confiq';
import bcrypt from 'bcrypt'; // Corrected import
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(confiq.bcrypt_salt_rounds),
  );
  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

//pre: আসল password নিয়েই কাজ করে, তারপর হ্যাশ করে DB-তে সেভ হয়।

//post: DB-এ save হয়ে যাওয়ার পর মেমোরি অবজেক্ট থেকে password খালি করে দেয়, যাতে সিকিউরিটি থাকে।
export const User = model<TUser>('User', userSchema);
