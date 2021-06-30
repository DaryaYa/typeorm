import { IStudent } from '../common/types';
import { Student } from './student.model';

class STUDENTS_DB {
  _db: IStudent[];

  constructor() {
    this._db = [];
  }

  findMany(): IStudent[] {
    return this._db;
  }

  findOne(id: string): IStudent | 'student not found' {
    const student = this._db.find(student => student.id === id);
    if (student !== undefined) return student;
    return 'student not found';
  }

  create(dto: Omit<IStudent, 'id'>): IStudent {
    const newStudent = new Student(dto)
    return newStudent;
  }

  save(student: IStudent): IStudent {
    this._db.push(student);
    return student;
  }

  update(id: string, dto: Omit<IStudent, 'id'>): IStudent | 'student not found' {
    let student = this.findOne(id);
    if (student !== 'student not found') {
      student = { ...student, ...dto }
     
    } else {
      return 'student not found'
    }
    return student;
  }

  delete(id: string): string {
    let student = this.findOne(id);
    if (student !== 'student not found') {
      this._db = this._db.filter(student => student.id === id);
      return 'Student DELETED'
    } else {
      return 'student not found'
    }

  }
}

export const DB = new STUDENTS_DB;