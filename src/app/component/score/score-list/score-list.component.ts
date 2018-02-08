import { Component } from "@angular/core";
import { Score } from "../../../container/model/score";
import { ScoresService } from "../../../container/service/score.component";

@Component({
    selector: 'app-score-list',
    template: `
        <h2>Score List</h2>

        <p>Form value: <code>{{ scoreList | json }}</code></p>

        <table class="table table-dark table-striped">
    <thead>
        <tr>
            <th scope="col">score_id</th>
            <th scope="col">score</th>
            <th scope="col">maxcombo</th>
            <th scope="col">count300</th>
            <th scope="col">count100</th>
            <th scope="col">count50</th>
            <th scope="col">countmiss</th>
            <th scope="col">countkatu</th>
            <th scope="col">countgeki</th>
            <th scope="col">perfect</th>
            <th scope="col">enabled_mods</th>
            <th scope="col">user_id</th>
            <th scope="col">date</th>
            <th scope="col">rank</th>
            <th scope="col">pp</th>
            <th scope="col">username</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let element of matchList">
            <td>{{ element.score_id }}</td>
            <td>{{ element.score }}</td>
            <td>{{ element.maxcombo }}</td>
            <td>{{ element.count300 }}</td>
            <td>{{ element.count100 }}</td>
            <td>{{ element.count50 }}</td>
            <td>{{ element.countmiss }}</td>
            <td>{{ element.countkatu }}</td>
            <td>{{ element.countgeki }}</td>
            <td>{{ element.perfect }}</td>
            <td>{{ element.enabled_mods }}</td>
            <td>{{ element.user_id }}</td>
            <td>{{ element.date }}</td>
            <td>{{ element.rank }}</td>
            <td>{{ element.pp }}</td>
            <td>{{ element.username }}</td>
        </tr>
    </tbody>
</table>
    `
})
export class ScoreListComponent {

    scoreList: Score[]

    constructor(
        private ss: ScoresService
    ) {
        this.ss.getScores(scoreList => this.scoreList = scoreList)
    }
}