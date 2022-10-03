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
  selector: 'app-userform-overview',
  templateUrl: './userform-overview.component.html',
  styleUrls: ['./userform-overview.component.scss']
})
export class UserformOverviewComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  step = 0;
  maritialStatus= new FormControl('', [
    Validators.required
  ]);
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      streetAddress: ['', Validators.required],
      firstName : ['', Validators.required],
      lastName: ['', Validators.required],
      nameAadhar: ['', Validators.required],
      Fathername: ['', Validators.required],
      apartmentUnit: ['', Validators.required],
      city :  ['', Validators.required],
      state : ['', Validators.required],
      pincode : ['', Validators.required],
      mobilePhone: ['', Validators.required, Validators.minLength(10)],
      maritialStatus:['', Validators.required],
      spouseName : ['', Validators.required],
      spouseEmployer: ['', Validators.required],
      spousePhone: ['', Validators.required],
      dependents:['', Validators.required],
      nominee: ['', Validators.required],
      bankName:['', Validators.required],
      bankNo: ['', Validators.required],
      bankAddress:['', Validators.required],
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
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
 
  matcher = new MyErrorStateMatcher();

  disableSelect = new FormControl(false);
  onSubmit(){
    if (this.firstFormGroup.valid) {
    
  }
  }
 
}