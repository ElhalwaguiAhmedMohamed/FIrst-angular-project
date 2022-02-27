import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 private students:Student[]= [new Student(1,"ahmed",20),new Student(1,"mohamed",20),new Student(1,"sarrah",20)];

 add(newStudent:Student){
   this.students.push(new Student(newStudent.id,newStudent.name,newStudent.age));
   //this.log.printMessage("");
 }

 getAllStudents():Student[]{
   return this.students;
 }

getStudentById(id:number):Student|null{
  for(let i=0;i<this.students.length;i++){
    if(this.students[i].id == id){
      return new Student(this.students[i].id,this.students[i].name,this.students[i].age);
    }
  }
  return null;
}

deleteStudentById(id:number){
  for(let i=0;i<this.students.length;i++){
    if(this.students[i].id == id){
      this.students.splice(i,1);
      break;
    }
  }
}


editStudentData(editStudent:Student){
  for(let i=0;i<this.students.length;i++){
    if(this.students[i].id == editStudent.id){
      this.students[i].name=editStudent.name;
      this.students[i].age=editStudent.age;
      break;
    }
  }
}


  constructor(private log:LoggerService) { }
}
