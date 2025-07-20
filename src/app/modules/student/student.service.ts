import { StudentModel } from './student.model';

const getSingleStudentFormDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOneAndDelete({ id });
  return result;
};

export const StudentService = {
  getAllStudentsFromDB,
  getSingleStudentFormDB,
  deleteStudentFromDB,
};
