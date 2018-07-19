import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OSU_API, SCORES } from './links-const';
import { Observable } from 'rxjs/Observable';
import { Score } from '../model/score';
import { KEY } from './key';

@Injectable()
export class AccountsService {
    results = [];

    constructor(private data: { apikey: string }) {}

    getAccount() {
        return this.data;
    }

    setAccount(data: { apikey: string }) {
        this.data = data;
    }
}
