import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
