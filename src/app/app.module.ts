import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchPlayerComponent } from './player/search-player/search-player.component';
import { SearchformPlayerComponent } from './player/search-player/searchform-player/searchform-player.component';
import {PlayerService} from './player/shared/player.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { CreatePlayerComponent } from './player/create-player/create-player.component';
import { UpdatePlayerComponent } from './player/update-player/update-player.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertModule } from 'ngx-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ToastyModule} from 'ng2-toasty';
import {ToastyServiceInt} from './shared/toasty.service';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'searchplayers', component: SearchPlayerComponent},
  {path: 'createplayer', component: CreatePlayerComponent},
  {path: 'updateplayer/:playerId', component: UpdatePlayerComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchPlayerComponent,
    SearchformPlayerComponent,
    CreatePlayerComponent,
    UpdatePlayerComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    ToastyModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [
    PlayerService,
    ToastyServiceInt
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
