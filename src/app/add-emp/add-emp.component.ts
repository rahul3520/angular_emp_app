import { Component } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  EmpCode=""
  name=""
  designation=""
  salary=""
  emailid=""
  phoneNo=""
  companyName=""
  YearofExperience=""

  readValues =() =>
  {
    let data:any={

      "EmpCode":this.EmpCode,
      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "emailid":this.emailid,
      "phoneNo":this.phoneNo,
      "companyName":this.companyName,
      "YearofExperience":this.YearofExperience
     }

     console.log(data)
  }

}
