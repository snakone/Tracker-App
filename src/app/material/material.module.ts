import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule, MatIconModule, MatListModule,
    MatDialogModule, MatFormFieldModule, MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule, MatIconModule, MatListModule,
    MatDialogModule, MatFormFieldModule, MatInputModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
