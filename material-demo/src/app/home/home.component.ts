import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpDetailDialogComponent } from '../emp-detail-dialog/emp-detail-dialog.component';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', email: 'abc@gmail', actions: 'H' },
  { id: 2, name: 'Helium', email: 'abc@gmail', actions: 'He' },
  { id: 3, name: 'Lithium', email: 'abc@gmail', actions: 'Li' },
  { id: 4, name: 'Beryllium', email: 'abc@gmail', actions: 'Be' },
  { id: 5, name: 'Boron', email: 'abc@gmail', actions: 'B' },
  { id: 6, name: 'Carbon', email: 'abc@gmail', actions: 'C' },
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  addEmpDialog() {
    this.dialog.open(EmpDetailDialogComponent);
  }
}
