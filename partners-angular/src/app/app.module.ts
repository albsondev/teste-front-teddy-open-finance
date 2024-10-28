import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPartnerComponent } from './components/add-partner/add-partner.component';
import { AboutComponent } from './components/about/about.component';
import { EditPartnerComponent } from './components/edit-partner/edit-partner.component';
import { PartnerService } from './services/partner.service'
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddPartnerComponent,
    AboutComponent,
    EditPartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatSnackBarModule
  ],
  providers: [PartnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
