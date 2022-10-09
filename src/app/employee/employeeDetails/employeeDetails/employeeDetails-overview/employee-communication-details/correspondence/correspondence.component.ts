import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  selector: 'app-correspondence',
  templateUrl: './correspondence.component.html',
  styleUrls: ['./correspondence.component.scss']
})
export class CorrespondenceComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  streetAddress = new FormControl('', [
    Validators.required
  ]);

  apartmentUnit = new FormControl('', [
    Validators.required
  ]);

  city = new FormControl('', [
    Validators.required
  ]);

  state = new FormControl('', [
    Validators.required
  ]);

  pincode = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit(): void {
    
  }

  
  
}
