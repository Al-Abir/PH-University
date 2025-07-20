import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { UserService } from './user.services';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAysnc';

// createStudent controller
const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { password, student: studentData } = req.body;

  const result = await UserService.createStudentDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

// export controller
export const UserController = {
  createStudent,
};
