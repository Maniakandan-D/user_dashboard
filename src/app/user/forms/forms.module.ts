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

import { FormsRoutingModule } from './forms-routing.module';
import { UserformComponent } from './userform/userform.component';
import { UserformOverviewComponent } from './userform/userform-overview/userform-overview.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        FormsRoutingModule,
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
        UserformOverviewComponent,
        UserformComponent
    ]
})
export class FormModule {}
