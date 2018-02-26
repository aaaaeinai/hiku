import { Component } from "@angular/core";
import { Game } from "../../../container/model/match";
import { MatchesService } from "../../../container/service/match.service";

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html'
})
export class GameListComponent {

    gameList: Game[]

    constructor(
        private ms: MatchesService
    ) {
        console.log('entered')
        this.ms.getGames(this.gameList)
    }
}