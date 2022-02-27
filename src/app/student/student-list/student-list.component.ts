import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/models/student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {

  //stdService:StudentService = new StudentService();
  students:Student[]=[];
  constructor(private stdService:StudentService) { }


  deleteRow(stdId:number){
    this.stdService.deleteStudentById(stdId);
  }
  ngOnInit(): void {
    this.students=this.stdService.getAllStudents();
  }

}
