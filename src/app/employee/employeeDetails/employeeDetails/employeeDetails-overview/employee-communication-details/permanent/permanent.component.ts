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
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-permanent',
  templateUrl: './permanent.component.html',
  styleUrls: ['./permanent.component.scss']
})
export class PermanentComponent implements OnInit {
  permanentForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.permanentForm = this._formBuilder.group({
      streetAddress: ['', Validators.required],
      apartmentUnit: ['', Validators.required],
      city :  ['', Validators.required],
      state : ['', Validators.required],
      pincode : ['', Validators.required],
      mobilePhone: ['', Validators.required, Validators.minLength(10)],
  })
}
  onSubmit(){
    if (this.permanentForm.valid) {
      console.log('correspondence form data :: ', this.permanentForm.value);
    }
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  
  matcher = new MyErrorStateMatcher();

  disableSelect = new FormControl(false);

}
