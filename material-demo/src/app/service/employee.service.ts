import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public fireservice: AngularFirestore) { }

  public addEmployee(emp: any) {

    return this.fireservice.collection('Employees').add(emp);
  }
  get_Emp() {
    return this.fireservice.collection('Employees').snapshotChanges();
  }
}
