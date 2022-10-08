import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-spouse-details',
  templateUrl: './employee-spouse-details.component.html',
  styleUrls: ['./employee-spouse-details.component.scss']
})
export class EmployeeSpouseDetailsComponent implements OnInit {
  spouseForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.spouseForm = this._formBuilder.group({
      maritialStatus:['', Validators.required],
      spouseName : ['', Validators.required],
      spouseEmployer: ['', Validators.required],
      spousePhone: ['', Validators.required],
  })
}
onSubmit(){
  if (this.spouseForm.valid) {
    console.log('Spouse form data :: ', this.spouseForm.value);
  }
}
}
