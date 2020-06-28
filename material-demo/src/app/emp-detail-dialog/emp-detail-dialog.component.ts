import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';



@Component({
  selector: 'app-emp-detail-dialog',
  templateUrl: './emp-detail-dialog.component.html',
  styleUrls: ['./emp-detail-dialog.component.css']
})
export class EmpDetailDialogComponent implements OnInit {

  ngOnInit(): void {
  }

  empname: string;
  empemail: string;

  constructor(public empService: EmployeeService) {
  }

  add_Emp() {
    alert("Working");
    let Record = {};
    Record['name'] = this.empname;
    Record['email'] = this.empemail;
    this.empService.addEmployee(Record).then(res => {
      this.empname = "";
      this.empemail = "";
      console.log(res);
      alert("Create successful")
    }).catch(error => {
      console.log(error);
    });
  }


}
