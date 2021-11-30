import { Component, OnInit } from '@angular/core';
import {Faction, Member} from "../../../app.component";
import {HttpService} from "../../../services/http.service";
import {MatSortModule, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  membersList: Array<Member> = [];
  displayedColumns = ['lp', 'username', 'level', 'daysInFaction', 'rpForFaction', 'roles', 'action'];

  constructor(private httpService: HttpService) {
    this.httpService.getMembers().subscribe((members: Array<Member>) => {
      this.membersList = members;
    });
  }

  ngOnInit(): void {
    this.sortData({ active: "id", direction: "asc" });
  }

  sortData(sort: Sort) {
    const data = this.membersList.slice();
    this.membersList = data.sort((a, b) => {
      const aValue = (a as any)[sort.active];
      const bValue = (b as any)[sort.active];
      return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
    });
  }

}
