import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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