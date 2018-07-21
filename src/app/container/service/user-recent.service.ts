import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRecent } from '../model/user-recent';
import { OSU_API, USER_RECENTS } from './links-const';
import { AccountsService } from './account.service';

@Injectable()
export class UserRecentsService {
    results = [];

    constructor(
        private http: HttpClient,
        private accountService: AccountsService,
    ) {}

    getUserRecents(data: (user_recents: UserRecent[]) => void) {
        return this.http
            .get(
                OSU_API +
                    USER_RECENTS +
                    '?k=' +
                    this.accountService.getAccount().apikey,
            )
            .subscribe(data);
    }
}
