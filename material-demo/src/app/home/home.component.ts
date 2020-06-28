import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpDetailDialogComponent } from '../emp-detail-dialog/emp-detail-dialog.component';
import { FirebaseApp } from '@angular/fire';
import { EmployeeService } from '../service/employee.service'


export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  actions: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { id: 1, name: 'Hydrogen', email: 'abc@gmail', actions: 'H' },
//   { id: 2, name: 'Helium', email: 'abc@gmail', actions: 'He' },
//   { id: 3, name: 'Lithium', email: 'abc@gmail', actions: 'Li' },
//   { id: 4, name: 'Beryllium', email: 'abc@gmail', actions: 'Be' },
//   { id: 5, name: 'Boron', email: 'abc@gmail', actions: 'B' },
//   { id: 6, name: 'Carbon', email: 'abc@gmail', actions: 'C' },
// ];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource;
  empname: string;
  empemail: string;
  employee: any;
  EMP_DATA = [];
  constructor(public dialog: MatDialog, public app: FirebaseApp, public empService: EmployeeService) {
  }
  //id: number;
  ngOnInit(): void {

    this.empService.get_Emp().subscribe(data => {
      // data.forEach(item => {
      //   var y = item.payload.doc.data();
      //   this.EMP_DATA.push(y);
      // })
      // console.log("EMP_DATA", this.EMP_DATA);
      // this.id = 0;
      this.EMP_DATA = data.map(e => {
        return {
          // id: this.id + 1,
          id: 1,
          isEdit: false,
          name: e.payload.doc.data()['name'],
          email: e.payload.doc.data()['email']
        }
      })
      console.log("EMP_DATA2", this.EMP_DATA);
      console.log(this.employee);
      this.dataSource = this.EMP_DATA;
    });

  }

  addEmpDialog() {
    //this.dialog.open(EmpDetailDialogComponent);
    this.dialog.open(EmpDetailDialogComponent, {
      data: {
        name: ""
      }
    });
  }

  editEmpDialog(item) {
    // console.log(item);
    // this.empname = item.name;
    // this.empemail = item.email;
    console.log(item);
    this.dialog.open(EmpDetailDialogComponent, {
      data: {
        name: item.name,
        email: item.email
      }
    });

  }
}
