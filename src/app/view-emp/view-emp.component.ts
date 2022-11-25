import { Component } from '@angular/core';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent {
  
  data:any=[
    {
    "name":"Rahul",
    "designation":"Trainee",
    "salary":25000,
    "emailid":"rahul3521",
    "companyName":"qwerty"
   },
   {
    "name":"Reshma",
    "designation":"Trainee",
    "salary":25000,
    "emailid":"resh521",
    "companyName":"xyz"
   },
   {
    "name":"Ron",
    "designation":"Trainee",
    "salary":25000,
    "emailid":"ron21",
    "companyName":"qwerty"
   },
   {
    "name":"Rinku",
    "designation":"Trainee",
    "salary":25000,
    "emailid":"rinku3521",
    "companyName":"qwerty"
   },
   {
    "name":"Rihana",
    "designation":"Trainee",
    "salary":25000,
    "emailid":"rihana3521",
    "companyName":"abc"
   }

 ]
}
