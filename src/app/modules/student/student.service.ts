import { Student } from './student.model';

const getSingleStudentFormDB = async (id: string) => {
  const result = await Student.findOne({ id });

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.findOneAndDelete({ id });
  return result;
};

export const StudentService = {
  getAllStudentsFromDB,
  getSingleStudentFormDB,
  deleteStudentFromDB,
};
