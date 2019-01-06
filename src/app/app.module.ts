import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// Material
import { MaterialModule } from './material/material.module';

// Maps
import { AgmCoreModule } from '@agm/core';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from './config/config.firebase';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { LoginDialogComponent } from './shared/dialog/login-dialog/login-dialog.component';
import { FormsModule } from '@angular/forms';
import { SnackBarComponent } from './shared/dialog/snack-bar/snack-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    LoginDialogComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCN1vq4PuxSrZhsSn6U_L0OFdYaE0UPQKk'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  entryComponents: [
    LoginDialogComponent,
    SnackBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
