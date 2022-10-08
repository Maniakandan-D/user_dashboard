import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
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
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-employeeDetails-overview',
  templateUrl: './employeeDetails-overview.component.html',
  styleUrls: ['./employeeDetails-overview.component.scss']
})
export class EmployeeDetailsOverviewComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  maritialStatus= new FormControl('', [
    Validators.required
  ]);
  submitted: boolean;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      dependents:['', Validators.required],
      nominee: ['', Validators.required],
    }, {updateOn: 'change' });


    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      initial: ['', Validators.required],
      firstName : ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName:['', Validators.required],
      motherName:['', Validators.required],
      fatherDOB: ['', Validators.required],
      motherDOB: ['', Validators.required],
    },  {updateOn: 'change' });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    },  {updateOn: 'change' });
  }

  onSubmit(): void{
    this.submitted = true
  }
}