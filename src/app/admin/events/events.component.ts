import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {HttpService} from "../../services/http.service";
import {Event} from "../../app.component";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  nowDate : Date = new Date();
  dateToCheckTimezones : Date = new Date();
  eventDate : Date = new Date();
  checkoutForm = this.formBuilder.group({
    title: '',
    description: '',
    eventDate: '',
  });
  eventsList: Array<Event> = [];

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) {
    this.httpService.getEventList().subscribe((events: Array<Event>) => {
      events.forEach(event => {
        this.eventDate = new Date(event.eventDate);
        let Event = {
          id: event.id,
          title: event.title,
          description: event.description,
          eventDate: this.eventDate
        }
        this.eventsList.push(Event);
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const Event = this.checkoutForm.value;
    this.httpService.addEvent(Event).subscribe();
    this.checkoutForm.reset();
    window.location.reload();

  }

  changeTodayDate(eventDate: Date): void {
    this.dateToCheckTimezones = eventDate;
  }

  clearOldEvents(){
    this.httpService.deleteOldEvents().subscribe();
    window.location.reload();
  }
}
