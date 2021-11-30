import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Faction, Member} from "../../app.component";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentPage: string = '';
  factionBasicInfo: Faction = {};
  constructor(private httpService: HttpService, private router: Router, private authenticationService: AuthenticationService) {
    this.httpService.getFaction().subscribe(faction => {
      this.factionBasicInfo = faction;
    });
    if(sessionStorage.getItem("currentUser") == null){
      this.router.navigate(['/login']).then(r => {});
    };
    this.currentPage = router.url;
  }

  ngOnInit(): void {  }

  updateFaction(){
    this.httpService.updateFaction().subscribe(faction => {
      this.factionBasicInfo = faction;
    })
  };

  updateMembers(event: any) {
    event.target.disabled = true;
    this.httpService.updateMembers().subscribe((members: Array<Member>) => {
      console.log('Update done');
    });
  }

  update(event: any){
    this.httpService.update().subscribe((members: Array<Member>) => {
      console.log('Update done');
    });
    event.target.disabled = true;
    setTimeout(() => {
      event.target.disabled = false
    }, 3600000)

    window.location.reload();
  }
}
