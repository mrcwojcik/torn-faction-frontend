import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {HttpService} from "./services/http.service";
import {HttpClientModule} from "@angular/common/http";
import { NavigationComponent } from './admin/modules/navigation/navigation.component';
import { MembersListComponent } from './admin/modules/members-list/members-list.component';
import { YeetListComponent } from './admin/modules/yeet-list/yeet-list.component';
import { MembersSubpageComponent } from './admin/members-subpage/members-subpage.component';
import { SortDirective } from './util/sort.directive';
import { YeetSubpageComponent } from './admin/yeet-subpage/yeet-subpage.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { EventsComponent } from './admin/events/events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { WelcomemessageComponent } from './admin/docs/welcomemessage/welcomemessage.component';
import { MeritComponent } from './admin/merit/merit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSort, MatSortHeader, MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotfoundComponent,
    NavigationComponent,
    MembersListComponent,
    YeetListComponent,
    MembersSubpageComponent,
    SortDirective,
    YeetSubpageComponent,
    EventsComponent,
    LoginComponent,
    SettingsComponent,
    WelcomemessageComponent,
    MeritComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'members', component: MembersSubpageComponent},
            {path: 'yeet', component: YeetSubpageComponent},
            {path: 'events', component: EventsComponent},
            {path: 'notfound', component: NotfoundComponent},
            {path: 'login', component: LoginComponent},
            {path: 'settings', component: SettingsComponent},
            {path: 'welcome', component: WelcomemessageComponent},
            {path: 'merit', component: MeritComponent},
            {path: '**', redirectTo: '/notfound'},
        ]),
        HttpClientModule,
        CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSortModule,
        MatTableModule
    ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
