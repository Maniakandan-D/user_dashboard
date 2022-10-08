import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeTableComponent } from './employeeTable/employeeTable.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeTableRoutingModule {}
