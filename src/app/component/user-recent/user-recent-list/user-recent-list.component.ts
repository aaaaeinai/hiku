import { Component } from "@angular/core";
import { UserRecent } from "../../../container/model/user-recent";
import { UserRecentsService } from "../../../container/service/user-recent.service";

@Component({
    selector: 'app-export-list',
    template: `
        <h2>User Recent List</h2>

        <p>Form value: <code>{{ userRecentList | json }}</code></p>

        <table class="table table-dark table-striped">
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
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let element of userRecentList">
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
            </tr>
        </tbody>
    </table>
    `
})
export class UserRecentListComponent {

    userRecentList: UserRecent[]

    constructor(
        private urs: UserRecentsService
    ) {
        this.urs.getUserRecents(userRecentList => this.userRecentList = userRecentList)
    }
}