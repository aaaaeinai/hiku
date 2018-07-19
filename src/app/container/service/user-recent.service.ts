import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRecent } from '../model/user-recent';
import { OSU_API, USER_RECENTS } from './links-const';
import { KEY } from './key';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserRecentsService {
    results = [];

    constructor(private http: HttpClient) {}

    getUserRecents(data: (user_recents: UserRecent[]) => void) {
        return this.http
            .get(OSU_API + USER_RECENTS + '?k=' + KEY)
            .subscribe(data);
    }
}
