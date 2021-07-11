import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
}
  constructor(private _notifications:NotificationsService) { }

  ngOnInit(): void {
  }

  contactMe(form:NgForm){
    console.log("",form);
    if(form.invalid){
      this._notifications.error('Invalid details', 'Please enter valid details for sending message', {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
      return;
    }
    this._notifications.success('Message sent', 'Thanks for contacting me....!', {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
    form.reset();
  }

}
