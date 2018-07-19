import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from '../../../container/model/match';
import { MatchesService } from '../../../container/service/match.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
})
export class GameListComponent implements OnInit, OnDestroy {
    gameList: Game[];
    dispose: Subscription;

    constructor(private ms: MatchesService, private route: ActivatedRoute) {}
    ngOnInit() {
        this.dispose = this.route.params.subscribe((params: Params) => {
            this.ms.getGames(gl => (this.gameList = gl[params['id']]['games']));
        });
    }

    ngOnDestroy() {
        this.dispose.unsubscribe();
    }
}
