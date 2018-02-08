import { Component } from "@angular/core";
import { User } from "../../../container/model/user";
import { UsersService } from "../../../container/service/user.service";

@Component({
    selector: 'app-user-list',
    template: `
        <h2>User List</h2>

        <p>Form value: <code>{{ userList | json }}</code></p>

        <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">user_id</th>
                <th scope="col">username</th>
                <th scope="col">count300</th>
                <th scope="col">count100</th>
                <th scope="col">count50</th>
                <th scope="col">maxcombo</th>
                <th scope="col">playcount</th>
                <th scope="col">ranked_score</th>
                <th scope="col">total_score</th>
                <th scope="col">pp_rank</th>
                <th scope="col">level</th>
                <th scope="col">pp_raw</th>
                <th scope="col">accuracy</th>
                <th scope="col">count_rank_ss</th>
                <th scope="col">count_rank_ssh</th>
                <th scope="col">count_rank_s</th>
                <th scope="col">count_rank_sh</th>
                <th scope="col">count_rank_a</th>
                <th scope="col">country</th>
                <th scope="col">pp_country_rank</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let element of userList">
                <td>{{ element.user_id }}</td>
                <td>{{ element.username }}</td>
                <td>{{ element.count300 }}</td>
                <td>{{ element.count100 }}</td>
                <td>{{ element.count50 }}</td>
                <td>{{ element.maxcombo }}</td>
                <td>{{ element.playcount }}</td>
                <td>{{ element.ranked_score }}</td>
                <td>{{ element.total_score }}</td>
                <td>{{ element.pp_rank }}</td>
                <td>{{ element.level }}</td>
                <td>{{ element.pp_raw }}</td>
                <td>{{ element.accuracy }}</td>
                <td>{{ element.count_rank_ss }}</td>
                <td>{{ element.count_rank_ssh }}</td>
                <td>{{ element.count_rank_s }}</td>
                <td>{{ element.count_rank_sh }}</td>
                <td>{{ element.count_rank_a }}</td>
                <td>{{ element.country }}</td>
                <td>{{ element.pp_country_rank }}</td>
            </tr>
        </tbody>
    </table>
    `
})
export class UserListComponent {
    
    userList: User[]
    
    constructor(
        private us: UsersService
    ) {
        this.us.getUsers(userList => this.userList = userList)
    }
}