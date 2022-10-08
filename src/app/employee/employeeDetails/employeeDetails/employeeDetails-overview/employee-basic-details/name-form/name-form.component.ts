import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss']
})
export class NameFormComponent implements OnInit {
  nameForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.nameForm = this._formBuilder.group({
      Fathername: ['', Validators.required],
      bithday:['', Validators.required]
  })
}
  onSubmit(){
    if (this.nameForm.valid) {
      console.log('Employee form data :: ', this.nameForm.value);
    }
  }
}
