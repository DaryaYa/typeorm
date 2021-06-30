import { studentsRepo } from "./student.repository";
import { StudentDTO} from "../common/types";

const getAll = () => studentsRepo.getAll();

const getById = (id: string) => studentsRepo.getById(id);

const createStudent = (dto: StudentDTO) => studentsRepo.createStudent(dto)

const updateStudent = (id: string, dto: StudentDTO) => studentsRepo.updateStudent(id, dto)

const deleteStudent = (id: string) => studentsRepo.deleteStudent(id);


export const studentService = {
  getAll, getById, createStudent, updateStudent, deleteStudent
}