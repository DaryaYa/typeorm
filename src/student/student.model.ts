import { IStudent } from '../common/types';
import {v4 as uuid} from 'uuid';

export class Student implements IStudent {
  id: string;
  first_name: string;
  last_name: string;
  age: number;

  constructor({id = uuid(), first_name = 'DEFAULT FIRST_NAME', last_name = 'DEFAULT LAST_NAME', age = 30}: {
    id?: string; 
    first_name: string; 
    last_name: string; 
    age: number}) {
      this.id =id ?? uuid();
      this.first_name = first_name;
      this.last_name = last_name;
      this.age = age;
    }
}