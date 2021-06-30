import { IStudent } from '../common/types';
import { DB as STUDENTS_DB } from './student.db';
// import { Student } from './student.model';
import { StudentDTO } from '../common/types';


const getAll = async (): Promise<IStudent[]> => {
  return STUDENTS_DB.findMany()
};

const getById = async (id: string): Promise<IStudent |'student not found'> => {
  return STUDENTS_DB.findOne(id);
}

const createStudent = async (dto: StudentDTO): Promise<IStudent> => {
  const newStudent = STUDENTS_DB.create(dto); 
  const savedStudent = STUDENTS_DB.save(newStudent);
  return savedStudent;
}

const updateStudent = async (id: string, dto: StudentDTO): Promise<IStudent | 'student not found'> => {
  return STUDENTS_DB.update(id, dto);
}

const deleteStudent = async (id: string): Promise<string> => {
  return STUDENTS_DB.delete(id);
}

export const studentsRepo = {
  getAll, getById, createStudent, updateStudent, deleteStudent
}