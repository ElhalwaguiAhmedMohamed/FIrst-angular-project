import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent implements OnInit {

  //stdService:StudentService = new StudentService();
  newStudent:Student=new Student(0,'',30);
  constructor(private stdService:StudentService) { }

  save(){
    this.stdService.add(this.newStudent);
    console.log("save in add component invoked");
  }

  ngOnInit(): void {
  }

}
