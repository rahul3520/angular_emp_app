import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent {

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
