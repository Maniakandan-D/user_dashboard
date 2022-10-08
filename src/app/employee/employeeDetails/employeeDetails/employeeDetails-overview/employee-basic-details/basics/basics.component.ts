import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
  basicsForm: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.basicsForm = this._formBuilder.group({
      firstName : ['', Validators.required],
      lastName: ['', Validators.required],
      nameAadhar: ['', Validators.required],
  })
}
  onSubmit(){
    if (this.basicsForm.valid) {
      console.log('Employee form data :: ', this.basicsForm.value);
    }
  }
}
