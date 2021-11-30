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
  checkoutForm = this.formBuilder.group({
    title: '',
    description: '',
    eventDate: '',
  });
  eventsList: Array<Event> = [];

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) {
    this.httpService.getEventList().subscribe((events: Array<Event>) => {
      events.forEach(event => {
        let Event = {
          id: event.id,
          title: event.title,
          description: event.description,
          eventDate: new Date(event.eventDate.valueOf() * 1000)
        }
        this.eventsList.push(Event);
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let Event = this.checkoutForm.value;
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

  deleteEvent(id: number){
    console.log(id);
    this.httpService.deleteEvent(id).subscribe();
    window.location.reload();
  }

}
