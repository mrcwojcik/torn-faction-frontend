import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../services/http.service";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    "apiKey": new FormControl("", Validators.required)
  });

  constructor(private httpService: HttpService, private router: Router, private authenticationService: AuthenticationService) {
    if (sessionStorage.getItem('currentUser') != null) {
      this.router.navigate(['/dashboard']).then(r => {});
    }
  }

  onSubmit(){
    this.httpService.login(this.form.value.apiKey).subscribe(member => {
      let string = this.form.value.apiKey;
      this.authenticationService.login(member, string)
      this.router.navigate(['/dashboard']).then(r => {});
    })
  }

  ngOnInit(): void {
  }

}

