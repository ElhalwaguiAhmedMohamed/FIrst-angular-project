import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];
  constructor(private deptService: DepartmentService) {}
  cropWidth = 75;
  flag = false;
  changeCropWidth(dept: Department) {
    this.cropWidth = (dept.rating * 75) / 5;
  }

  deleteRow(deptId: number) {
    this.deptService.deleteDepartmentById(deptId);
  }
  editRow() {
    //this.deptService.editDepartmentData();
    this.flag = !this.flag;
    //this.deptService.editDepartmentData(dept);
  }
  getDataFromChild(e: any) {
    console.log(e);
    this.deptService.editDepartmentData(e);
  }
  ngOnInit(): void {
    this.departments = this.deptService.getAllDepartments();
  }
}
