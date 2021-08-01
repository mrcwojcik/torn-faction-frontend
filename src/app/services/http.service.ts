import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Faction, Member, Event} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getFaction(): Observable<Faction>{
    return this.http.get<Faction>('http://localhost:8081/api/faction');
  };

  getMembers(): Observable<Array<Member>>{
    return this.http.get<Array<Member>>('http://localhost:8081/api/members');
  };

  addEvent(event: Event): Observable<Event>{
    return this.http.post<Event>('http://localhost:8081/api/event/add', event);
  }

  getEventList(): Observable<Array<Event>>{
    return this.http.get<Array<Event>>('http://localhost:8081/api/events');
  }

  deleteOldEvents(): Observable<Array<Event>>{
    return this.http.get<Array<Event>>('http://localhost:8081/api/events/clear');
  }

}
