import httpStatus from 'http-status';
import { RequestHandler } from 'express';
import { StudentService } from './student.service';
import catchAsync from '../../utils/catchAysnc';
import sendResponse from '../../utils/sendResponse';

const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await StudentService.getAllStudentsFromDB();
  res.status(200).json({
    success: true,
    message: 'Student are retrieved succesfully',
    data: result,
  });
});

const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentService.getSingleStudentFormDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Return single Student succesfully',
    data: result,
  });
});
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentService.deleteStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted succesfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
