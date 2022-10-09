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
      (control.dirty || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-permanent',
  templateUrl: './permanent.component.html',
  styleUrls: ['./permanent.component.scss']
})
export class PermanentComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  
  mobilePhone = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  constructor() { }

  ngOnInit(): void {
   
  }

  disableSelect = new FormControl(false);

}
