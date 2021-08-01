import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Faction, Member} from "../../app.component";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  factionBasicInfo: Faction = {};
  constructor(private httpService: HttpService) {
    this.httpService.getFaction().subscribe(faction => {
      this.factionBasicInfo = faction;
    });
  }

  ngOnInit(): void {  }

}
