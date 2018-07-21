import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesScore } from '../../../../container/model/match';
import { MatchesService } from '../../../../container/service/match.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-scores',
    templateUrl: './game-scores.component.html',
})
export class GameScoresComponent implements OnInit, OnDestroy {
    gamesScores: GamesScore[];
    dispose: Subscription;

    constructor(private ms: MatchesService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.dispose = this.route.params.subscribe((params: Params) => {
            this.ms.getGamesScores(gs => {
                let matchId = params['match_id'];
                let gameId = params['game_id'];
                this.gamesScores = gs[matchId]['games'][gameId]['games_scores'];
            });
        });
    }

    ngOnDestroy() {
        this.dispose.unsubscribe();
    }
}
