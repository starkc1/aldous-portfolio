import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from '../services/data.service';
import { LoginService } from './../services/login.service';
import { MainComponent } from '../components/main-component/main-component.component';
import { AdminComponent } from "../components/admin-component/admin-component";

//ANGULAR MATERIAL IMPORTS
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { MatListModule } from '@angular/material/list';


import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [
    DataService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
