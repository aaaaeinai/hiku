import { Component } from "@angular/core";
import { Score } from "../../../container/model/score";
import { ScoresService } from "../../../container/service/score.component";

@Component({
    selector: 'app-score-list',
    templateUrl: './score-list.component.html'
})
export class ScoreListComponent {

    scoreList: Score[]

    constructor(
        private ss: ScoresService
    ) {
        this.ss.getScores(scoreList => this.scoreList = scoreList)
    }
}