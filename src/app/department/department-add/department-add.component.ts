import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  newDepartment:Department=new Department(4,'',5);
  constructor(private deptService:DepartmentService) { }

  save(){
    this.deptService.add(this.newDepartment);
  }
  ngOnInit(): void {
  }

}
