import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../../shared/dialog/login-dialog/login-dialog.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.openDialog();
    }, 1000);
  }

  openDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: '350px',
      height: '200px',
      closeOnNavigation: false,
      disableClose: true
    });
  } 

}
