import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

interface City {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private _notificationService: NotificationsService) { }

  ngOnInit(): void {
  }
  selectedCity: string;
  fromDate: string;
  toDate: string;
  noOfGuests: string;
  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
}

  cities: City[] = [
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Kolkata', viewValue: 'Kolkata'},
    {value: 'Chandigarh', viewValue: 'Chandigarh'},
    {value: 'Mumbai', viewValue: 'Mumbai'}
  ];

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  guests: String[] = ["1","2","3","4"];

  @Output() searchItem = new EventEmitter<NgForm>();

  onSearch(form:NgForm){
    if(form.invalid){ 
      this._notificationService.error('Error....!', 'Please fill all the inputs before searching', {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
      return;
    }
    var today = new Date();  
    console.log("---------------------------",today,form.value);
    if(today>form.value.fromDate){
      this._notificationService.error('Error....!', 'From date cannot be a past day', {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
      return;
    }
    if(form.value.toDate<form.value.fromDate){
      this._notificationService.error('Error....!', 'From date cannot be a greater than To Date', {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
      return;
    }

    this.searchItem.emit(form);
  }


}
