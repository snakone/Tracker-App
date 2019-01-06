import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _login: LoginService,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(): void {
    if (this._login.checkLogin(this.data)) {
      this.router.navigate(['/home']);
      this.closeDialog();
    } else {
      this.openSnackBar();
    }
  }

  openSnackBar(): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
