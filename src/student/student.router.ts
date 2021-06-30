import { Router, Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { StudentDTO } from '../common/types';
import { studentService } from './student.service';

const { OK, NOT_FOUND, CREATED, NO_CONTENT } = StatusCodes;

const router = Router({mergeParams: true});

router
.route('/')
.get(async (req, res) => {
  const students = await studentService.getAll();
  res.status(OK).send(students);
})
.post(async (req, res) => {
  const student = await studentService.createStudent(req.body);
  res.status(CREATED).send(student);
});

router
.route('/:id')
.get(async (req, res) => {
  const { id } = <{ id: string }>req.params;
  const result = await studentService.getById(id);
  if (result === 'student not found') {
    return res.status(NOT_FOUND).send({message: 'Student not found!'})
  }
  return res.status(OK).send(result);
})
.put(async (req, res)=> {
  const { id } = <{ id: string }>req.params;
  const result = await studentService.updateStudent(id, req.body as StudentDTO);
  if (result === 'student not found') {
    return res.status(NOT_FOUND).send({message: 'Student not found!'})
  }
  return res.status(OK).send(result);
})
.delete(async (req, res) => {
  const { id } = <{ id: string }>req.params;
  const result = await studentService.deleteStudent(id);
  if (result === 'student not found') {
    return res.status(NOT_FOUND).send({ message: 'Student not found!' })
  }
  return res.status(NO_CONTENT).send({ message: 'student DELETED!'});
})

export {router};