import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || isSubmitted) //|| control.touched 
    );
  }
}

@Component({
  selector: 'app-employee-bank',
  templateUrl: './employee-bank.component.html',
  styleUrls: ['./employee-bank.component.scss']
})
export class EmployeeBankComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  
  bankName = new FormControl('', [
    Validators.required
  ]);
  bankNo = new FormControl('', [
    Validators.required
  ]);
  bankAddress = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit(): void {

  }
  
}
