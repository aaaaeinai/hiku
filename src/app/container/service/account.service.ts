import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OSU_API, BEATMAPS } from './links-const';

@Injectable()
export class AccountsService {
    private data: { apikey: string };
    private valid = false;

    constructor(private http: HttpClient) {}

    get Logged() {
        return !!this.data;
    }

    getAccount() {
        return this.data;
    }

    setAccount(data: { apikey: string }) {
        this.data = data;
    }
}
