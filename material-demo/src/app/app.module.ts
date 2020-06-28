import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { EmpDetailDialogComponent } from './emp-detail-dialog/emp-detail-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { EmployeeService } from './service/employee.service'

const firebaseConfig = {
  apiKey: "AIzaSyAJ3b-wu6ahs9jo6gXN6qlTMHjru9E4MuQ",
  authDomain: "employeecrudangular8.firebaseapp.com",
  databaseURL: "https://employeecrudangular8.firebaseio.com",
  projectId: "employeecrudangular8",
  storageBucket: "employeecrudangular8.appspot.com",
  messagingSenderId: "254203672081",
  appId: "1:254203672081:web:22cc97a3ce890be3f223b0",
  measurementId: "G-N3VFW8BX3H"
}
const material = [MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpDetailDialogComponent
  ],
  entryComponents: [EmpDetailDialogComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
    //AngularFirestore
  ],
  exports: [material],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
