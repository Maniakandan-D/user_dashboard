import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { EmployeeDetailsRoutingModule } from './employeeDetails-routing.module';
import { EmployeeDetailsComponent } from './employeeDetails/employeeDetails.component';
import { EmployeeDetailsOverviewComponent } from './employeeDetails/employeeDetails-overview/employeeDetails-overview.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EmployeeBasicDetailsComponent } from './employeeDetails/employeeDetails-overview/employee-basic-details/employee-basic-details.component';
import { EmployeeCommunicationDetailsComponent } from './employeeDetails/employeeDetails-overview/employee-communication-details/employee-communication-details.component';
import { EmployeeBankComponent } from './employeeDetails/employeeDetails-overview/employee-bank-details/employee-bank/employee-bank.component';
import { EmployeeBankDetailsComponent } from './employeeDetails/employeeDetails-overview/employee-bank-details/employee-bank-details.component';
import { EmployeeNationalityDetailsComponent } from './employeeDetails/employeeDetails-overview/employee-nationality-details/employee-nationality-details.component';
import { CorrespondenceComponent } from './employeeDetails/employeeDetails-overview/employee-communication-details/correspondence/correspondence.component';
import { PermanentComponent } from './employeeDetails/employeeDetails-overview/employee-communication-details/permanent/permanent.component';
import { BasicsComponent } from './employeeDetails/employeeDetails-overview/employee-basic-details/basics/basics.component';
import { NomineeComponent } from './employeeDetails/employeeDetails-overview/employee-nationality-details/nominee/nominee.component';
import { NameFormComponent } from './employeeDetails/employeeDetails-overview/employee-basic-details/name-form/name-form.component';
import { EmployeeSpouseDetailsComponent } from './employeeDetails/employeeDetails-overview/employee-bank-details/employee-spouse-details/employee-spouse-details.component';
import { NationalityComponent } from './employeeDetails/employeeDetails-overview/employee-nationality-details/nationality/nationality.component';


@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        EmployeeDetailsRoutingModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatStepperModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatSliderModule,
        MatSnackBarModule,
        MatIconModule,
        MatExpansionModule,
        MatChipsModule,
        MatBottomSheetModule,
        MatTooltipModule,
        MatDividerModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatCheckboxModule
    ],
    declarations: [
        HomeComponent,
        EmployeeDetailsOverviewComponent,
        EmployeeDetailsComponent,
        EmployeeBasicDetailsComponent,
        EmployeeCommunicationDetailsComponent,
        EmployeeBankDetailsComponent,
        EmployeeNationalityDetailsComponent,
        CorrespondenceComponent,
        PermanentComponent,
        NomineeComponent,
        NameFormComponent,
        EmployeeSpouseDetailsComponent,
        EmployeeBankComponent,
        NationalityComponent,
        BasicsComponent,
        EmployeeNationalityDetailsComponent
    ]
})
export class EmployeeDetailsModule {}
