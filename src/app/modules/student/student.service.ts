import { StudentModel } from './student.model';
import { IStudent } from './student.interface';

const createStudentIntoDB = async (student: IStudent) => {
  const result = await StudentModel.create(student);

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFormDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });

  return result;
};

export const StudentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFormDB,
};
