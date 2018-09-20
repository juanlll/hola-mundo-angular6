import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	records = [
  {
    temp:0,
    humidity:23,
    co2:654
  }
  ];  

  record = {
    temp:null,
    humidity:null,
    co2:null
  };



  constructor() {
 

}

  ngOnInit() {
this.getRecords();
  }

validateInput(array){
 return (array.temp && array.humidity && array.co2);
}


  setRecord(record){
    this.records.push(record);
    this.record.temp = "";
    this.record.humidity ="";
    this.record.humidity = "";
  }

  getRecords(){



  }


  

}
