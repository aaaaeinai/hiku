import { Component } from "@angular/core";
import { Match } from "../../../container/model/match";
import { MatchesService } from "../../../container/service/match.service";

@Component({
    selector: 'app-match-list',
    templateUrl: './match-list.component.html'
})
export class MatchListComponent {

    matchList: Match[]

    constructor(
        private ms: MatchesService
    ) {
        this.ms.getMatches(matchList => this.matchList = matchList)
    }
}