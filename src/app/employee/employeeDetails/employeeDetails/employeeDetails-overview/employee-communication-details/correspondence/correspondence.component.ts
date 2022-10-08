import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-correspondence',
  templateUrl: './correspondence.component.html',
  styleUrls: ['./correspondence.component.scss']
})
export class CorrespondenceComponent implements OnInit {
  correspondenceForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.correspondenceForm = this._formBuilder.group({
      streetAddress: ['', Validators.required],
      apartmentUnit: ['', Validators.required],
      city :  ['', Validators.required],
      state : ['', Validators.required],
      pincode : ['', Validators.required],
  })
  }

  onSubmit(){
    if (this.correspondenceForm.valid) {
      console.log('correspondence form data :: ', this.correspondenceForm.value);
    }
  }
}
