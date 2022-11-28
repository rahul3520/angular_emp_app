import { Component } from '@angular/core';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {

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
