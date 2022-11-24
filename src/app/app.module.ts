import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:AddEmpComponent
  },
  {
    path:"edit",
    component:EditEmpComponent
  },
  {
    path:"search",
    component:SearchEmpComponent
  },
  {
    path:"delete",
    component:DeleteEmpComponent
  },
  {
    path:"view",
    component:ViewEmpComponent

  }

]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmpComponent,
    SearchEmpComponent,
    DeleteEmpComponent,
    ViewEmpComponent,
    EditEmpComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
