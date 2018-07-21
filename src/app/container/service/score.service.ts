import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OSU_API, SCORES } from './links-const';
import { Score } from '../model/score';
import { AccountsService } from './account.service';

@Injectable()
export class ScoresService {
    results = [];

    constructor(
        private http: HttpClient,
        private accountService: AccountsService,
    ) {}

    getScores(data: (scores: Score[]) => void) {
        return this.http
            .get(
                OSU_API +
                    SCORES +
                    '?k=' +
                    this.accountService.getAccount().apikey,
            )
            .subscribe(data);
    }
}
