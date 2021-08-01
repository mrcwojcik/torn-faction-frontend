import {Component, Input, OnInit} from '@angular/core';
import {Faction, Member} from "../../../app.component";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-yeet-list',
  templateUrl: './yeet-list.component.html',
  styleUrls: ['./yeet-list.component.css']
})
export class YeetListComponent implements OnInit {

  yeetList: Array<Member> = [];
  constructor(private httpService: HttpService) {
    this.httpService.getMembers().subscribe((members: Array<Member>) => {
      this.yeetList = members.filter(m => m.lastAction > 4);
    });
  }

  ngOnInit(): void {
  }

}
