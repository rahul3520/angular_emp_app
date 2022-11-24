import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmpComponent,
    SearchEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
