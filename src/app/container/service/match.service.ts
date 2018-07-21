import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../model/match';
import { OSU_API, MATCHES } from './links-const';
import { AccountsService } from './account.service';

@Injectable()
export class MatchesService {
    results = [];

    constructor(
        private http: HttpClient,
        private accountService: AccountsService,
    ) {}

    getMatches = (data: (matches: Match[]) => void) => {
        this.http
            .get(
                OSU_API +
                    MATCHES +
                    '?k=' +
                    this.accountService.getAccount().apikey,
            )
            .subscribe(data);
    };

    getGames = this.getMatches;

    getGamesScores = this.getMatches;
}
