import { Injectable } from '@angular/core';
import { Department } from './models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments:Department[] = [new Department(1,'SD',4) , new Department(2,'OS',3), new Department(3,'AI',2.5)];
  constructor() { }


  add(newDept:Department){
    this.departments.push(new Department(newDept.id,newDept.name,newDept.rating));
    //this.log.printMessage("");
  }

  getAllDepartments():Department[]{
    return this.departments;
  }

 getDepartmentById(id:number):Department|null{
   for(let i=0;i<this.departments.length;i++){
     if(this.departments[i].id == id){
       return new Department(this.departments[i].id,this.departments[i].name,this.departments[i].rating);
     }
   }
   return null;
 }

 deleteDepartmentById(id:number){
   for(let i=0;i<this.departments.length;i++){
     if(this.departments[i].id == id){
       this.departments.splice(i,1);
       break;
     }
   }
 }


 editDepartmentData(editDept:Department){
   for(let i=0;i<this.departments.length;i++){
     if(this.departments[i].id == editDept.id){
       this.departments[i].name=editDept.name;
       this.departments[i].rating=editDept.rating;
       break;
     }
   }
 }
}
