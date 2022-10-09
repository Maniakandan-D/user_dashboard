import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  form = new FormGroup({
    firstName : new FormControl('', [
      Validators.required
    ]),
    lastName : new FormControl('', [
      Validators.required
    ]),
    nameAadhar : new FormControl('', [
      Validators.required
    ]),
  });
  
  
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    console.log(this.form)
  }
}
