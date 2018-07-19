import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OSU_API, USER_BESTS } from './links-const';
import { KEY } from './key';
import { Observable } from 'rxjs/Observable';
import { UserBest } from '../model/user-best';

@Injectable()
export class UserBestsService {
    results = [];

    constructor(private http: HttpClient) {}

    getUserBests(data: (user_best: UserBest[]) => void) {
        return this.http
            .get(OSU_API + USER_BESTS + '?k=' + KEY)
            .subscribe(data);
    }
}
