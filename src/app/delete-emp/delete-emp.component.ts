import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent {

  EmpCode=""


  readValues=() =>
  {

    let data:any=
    {
      "EmpCode":this.EmpCode
    }

    console.log(data)

  }

}
