import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitForm: any
  errorMessage: any;
  email: any;
  password: any;
  border=false;

  constructor(private fb: FormBuilder, private http:HttpClient, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.submitForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
    
  }
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  onSubmit(data:any){
    console.log(data);
    if(data.status == "INVALID"){
      this.border = true;
    }
    else{
      console.log(data.status);
      this.http.post<any>('https://dev.hirewalks.com/api/v1/candidate/login', { "email": data.value.email,  "password":data.value.password }).subscribe({
              next: data => {
                  console.log(data);
                  console.log("Succssfully logged in");
                  this.openSnackBar('Succssfully logged in','close');
                  this.border=false;
              },
              error: error => {
                  this.errorMessage = error.message;
                  console.error('There was an error!', error);
                  this.openSnackBar('Email or possword is incorrect','close');
              }
          })
      }
    }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
}
