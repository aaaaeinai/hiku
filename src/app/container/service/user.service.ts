import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OSU_API, USERS } from './links-const';
import { User } from '../model/user';
import { AccountsService } from './account.service';

@Injectable()
export class UsersService {
    results = [];

    constructor(
        private http: HttpClient,
        private accountService: AccountsService,
    ) {}

    getUsers(data: (users: User[]) => void) {
        return this.http
            .get(
                OSU_API +
                    USERS +
                    '?k=' +
                    this.accountService.getAccount().apikey,
            )
            .subscribe(data);
    }
}
