import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.scss']
})
export class NomineeComponent implements OnInit {
  nomineeForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.nomineeForm = this._formBuilder.group({
      dependents:['', Validators.required],
      nominee: ['', Validators.required],
    })
  }
  onSubmit(){
    if (this.nomineeForm.valid) {
      console.log('Nominee form data :: ', this.nomineeForm.value);
    }
  }
}
