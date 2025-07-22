// user.service.ts
import confiq from '../../confiq';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.models';

const createStudentDB = async (password: string, studentData: TStudent) => {
  // Step 1: Prepare user data
  const userData: Partial<TUser> = {
    password: password || confiq.default_password,
    role: 'student',
    id: '203010001', // static ID (use dynamic later)
  };

  // Step 2: Create User
  const newUser = await User.create(userData);

  if (!newUser || !newUser._id) {
    throw new Error('User creation failed');
  }

  // Step 3: Create Student
  studentData.id = newUser.id;
  studentData.user = newUser._id;

  const newStudent = await Student.create(studentData);

  return {
    user: newUser,
    student: newStudent,
  };
};

export const UserService = {
  createStudentDB,
};
