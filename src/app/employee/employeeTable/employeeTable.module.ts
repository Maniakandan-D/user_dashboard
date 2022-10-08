import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { DataService } from './data.service';
import { EmployeeTableRoutingModule } from './employeeTable-routing.module';
import { EmployeeTableComponent } from './employeeTable/employeeTable.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeTableRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule
  ],
  declarations: [EmployeeTableComponent],
  providers: [DataService]
})
export class EmployeeTableModule {}
