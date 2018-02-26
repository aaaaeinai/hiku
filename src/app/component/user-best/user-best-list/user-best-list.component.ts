import { Component } from "@angular/core";
import { UserBest } from "../../../container/model/user-best";
import { UserBestsService } from "../../../container/service/user-best.service";

@Component({
    selector: 'app-score-list',
    template: `
        <h1 class="display-4 bd-title" id="content">User Best List</h1>

        <table class="table table-responsive table-dark table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th scope="col">beatmap_id</th>
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
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let element of userBestList">
                <td>{{ element.beatmap_id }}</td>
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
            </tr>
        </tbody>
    </table>
    `
})
export class UserBestListComponent {
    
    userBestList: UserBest[]
    
    constructor(
        private ubs: UserBestsService
    ) {
        this.ubs.getUserBests(userBestList => this.userBestList = userBestList)
    }
}