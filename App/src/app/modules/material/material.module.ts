import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
  ],
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatMenuModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule,
    MatSelectModule,
    MatGridListModule,
    MatTooltipModule
  ],
  exports: [
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatMenuModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule,
    MatSelectModule,
    MatGridListModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
