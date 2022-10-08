import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-bank',
  templateUrl: './employee-bank.component.html',
  styleUrls: ['./employee-bank.component.scss']
})
export class EmployeeBankComponent implements OnInit {
  bankForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bankForm = this._formBuilder.group({
      bankName:['', Validators.required],
      bankNo: ['', Validators.required],
      bankAddress:['', Validators.required],
    })
  }
  onSubmit(){
    if (this.bankForm.valid) {
      console.log('Bank form data :: ', this.bankForm.value);
    }
  }
}
