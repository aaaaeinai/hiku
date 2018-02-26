import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BeatmapListComponent } from "../../component/beatmap/beatmap-list/beatmap-list.component";
import { BeatmapDetailComponent } from "../../component/beatmap/beatmap-detail/beatmap-detail.component";
import { MatchListComponent } from "../../component/match/match-list/match-list.component";
import { ScoreListComponent } from "../../component/score/score-list/score-list.component";
import { UserListComponent } from "../../component/user/user-list/user-list.component";
import { UserBestListComponent } from "../../component/user-best/user-best-list/user-best-list.component";
import { UserRecentListComponent } from "../../component/user-recent/user-recent-list/user-recent-list.component";
import { GameListComponent } from "../../component/match/game-list/game-list.component";

const appRoutes: Routes = [
    {
        path: '',
        component: BeatmapListComponent,
        children: [
            {
                path: 'details',
                component: BeatmapDetailComponent
            }
        ],
        pathMatch: 'full'
    },
    {
        path: 'match',
        component: MatchListComponent,
        children: [
            {
                path: ':id/game',
                component: GameListComponent
            }
        ]
    },
    {
        path: 'score',
        component: ScoreListComponent
    },
    {
        path: 'user',
        component: UserListComponent
    },
    {
        path: 'user-best',
        component: UserBestListComponent
    },
    {
        path: 'user-recent',
        component: UserRecentListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }