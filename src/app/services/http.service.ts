import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Faction, Member, Event} from "../app.component";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFaction(): Observable<Faction>{
    return this.http.get<Faction>(this.API_URL + '/api/faction');
  };

  getMembers(): Observable<Array<Member>>{
    return this.http.get<Array<Member>>(this.API_URL + '/api/members');
  };

  addEvent(event: Event): Observable<Event>{
    return this.http.post<Event>(this.API_URL + '/api/event/add', event);
  }

  getEventList(): Observable<Array<Event>>{
    return this.http.get<Array<Event>>(this.API_URL + '/api/events');
  }

  deleteOldEvents(): Observable<Array<Event>>{
    return this.http.get<Array<Event>>(this.API_URL + '/api/events/clear');
  }

  deleteEvent(id: number): Observable<Array<Event>>{
    return this.http.get<Array<Event>>(this.API_URL + '/api/event/delete/' + id);
  }

  updateFaction(): Observable<Faction>{
    return this.http.get<Faction>(this.API_URL + "/api/faction/update");
  }

  updateMembers(): Observable<Array<Member>>{
    return this.http.get<Array<Member>>(this.API_URL + '/api/members/update', {
      // @ts-ignore
      headers: {'key': sessionStorage.getItem('apiKey').toString()}
    })
  }

  update(): Observable<Array<Member>>{
    return this.http.get<Array<Member>>(this.API_URL + '/api/update', {
      // @ts-ignore
      headers: {'apiKey': sessionStorage.getItem('apiKey').toString()}
    })
  }

  getMeritList(): Observable<Array<Member>>{
    return this.http.get<Array<Member>>(this.API_URL + '/api/merit');
  }

  login(apiKey: String): Observable<Member>{
    return this.http.get<Member>(this.API_URL + '/api/login/' + apiKey)
  }

}
