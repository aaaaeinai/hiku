import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './container/route/route';

import { AppComponent } from './app.component';
import { BeatmapDetailComponent } from './component/beatmap/beatmap-detail/beatmap-detail.component';
import { BeatmapListComponent } from './component/beatmap/beatmap-list/beatmap-list.component';
import { UsersService } from './container/service/user.service';
import { UserRecentsService } from './container/service/user-recent.service';
import { UserBestsService } from './container/service/user-best.service';
import { ScoresService } from './container/service/score.component';
import { MatchesService } from './container/service/match.service';
import { BeatmapsService } from './container/service/beatmaps.service';
import { MatchListComponent } from './component/match/match-list/match-list.component';
import { ScoreListComponent } from './component/score/score-list/score-list.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { UserBestListComponent } from './component/user-best/user-best-list/user-best-list.component';
import { UserRecentListComponent } from './component/user-recent/user-recent-list/user-recent-list.component';
import { HeaderComponent } from './component/header/header.component';
import { GameListComponent } from './component/match/game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeatmapDetailComponent,
    BeatmapListComponent,
    MatchListComponent,
    ScoreListComponent,
    UserListComponent,
    UserBestListComponent,
    UserRecentListComponent,
    HeaderComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    BeatmapsService,
    MatchesService,
    ScoresService,
    UserBestsService,
    UserRecentsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
