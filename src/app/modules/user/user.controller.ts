import httpStatus from 'http-status';
// user.controller.ts
import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.services';
import sendResponse from '../../utils/sendResponse';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserService.createStudentDB(password, studentData);

    // res.status(201).json({
    //   success: true,
    //   message: 'Student created successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is Created  successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createStudent,
};
