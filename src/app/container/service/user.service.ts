import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { OSU_API, USERS } from './links-const';
import { KEY } from './key';
import { User } from '../model/user';

@Injectable()
export class UsersService {
    results = [];

    constructor(private http: HttpClient) {}

    getUsers(data: (users: User[]) => void) {
        return this.http.get(OSU_API + USERS + '?k=' + KEY).subscribe(data);
    }
}
