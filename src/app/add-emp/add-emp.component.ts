import { Component } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  name=""
  designation=""
  salary=""
  emailid=""
  companyName=""

  readValues =() =>
  {
    let data:any={

      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "emailid":this.emailid,
      "companyName":this.companyName
     }

     console.log(data)
  }

}
