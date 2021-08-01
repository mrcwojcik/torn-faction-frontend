import { Component, OnInit } from '@angular/core';
import {Faction, Member} from "../../../app.component";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  membersList: Array<Member> = [];
  constructor(private httpService: HttpService) {
    this.httpService.getMembers().subscribe((members: Array<Member>) => {
      this.membersList = members;
    });
  }

  ngOnInit(): void {
  }

}
