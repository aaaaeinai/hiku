import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OSU_API, USER_BESTS } from './links-const';
import { UserBest } from '../model/user-best';
import { AccountsService } from './account.service';

@Injectable()
export class UserBestsService {
    results = [];

    constructor(
        private http: HttpClient,
        private accountService: AccountsService,
    ) {}

    getUserBests(data: (user_best: UserBest[]) => void) {
        return this.http
            .get(
                OSU_API +
                    USER_BESTS +
                    '?k=' +
                    this.accountService.getAccount().apikey,
            )
            .subscribe(data);
    }
}
