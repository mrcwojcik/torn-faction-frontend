import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tornfactionFront';


}

export interface Faction {
  torn_id?: string;
  name?: string;
  respect?: string;
  age?: string;
  bestchain?: string;
}

export interface Member {
  tornId: number;
  username: string;
  rpForFaction: number;
  daysInFaction: number;
  level: number;
  yellowFlag: number;
  yeet: boolean;
  lastAction: number;
}

export interface Event {
  id: number;
  title: string;
  description?: string;
  eventDate: Date;
}
