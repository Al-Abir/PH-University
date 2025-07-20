import { StudentControllers } from './student.controller';
import express from 'express';
const router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:semesterIdId', StudentControllers.deleteStudent);
export const StudentRoutes = router;
