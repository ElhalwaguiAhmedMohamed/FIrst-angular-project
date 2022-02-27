import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department';


@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  @Output() editedDept = new EventEmitter<Department>();

  constructor() { }

  edit(t1:any,t2:any,t3:any){
    let d = new Department(parseInt(t1.value),t2.value,parseInt(t3.value));
    this.editedDept.emit(d);
  }
  ngOnInit(): void {
  }

}
