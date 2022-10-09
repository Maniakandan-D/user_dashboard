import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.scss']
})
export class NomineeComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  
  dependents = new FormControl('', [
    Validators.required
  ]);
  nominee = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit(): void {
  
  }
  
}
