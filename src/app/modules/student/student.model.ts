import { Schema, model } from 'mongoose';
import {
  Guardian,
  IStudent,
  UserName,
  LocalGuardian,
} from './student.interface';

// Sub-schema for user name
const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
});

// Sub-schema for guardian
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Sub-schema for local guardian
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Main Student Schema
export const StudentSchema = new Schema<IStudent>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: UserNameSchema,
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    contactNo: {
      type: String,
      unique: true,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImage: {
      type: String,
    },
    isActive: ['active', 'blocked'],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

// Export the model
export const StudentModel = model<IStudent>('Student', StudentSchema);
