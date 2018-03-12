import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Match, Game, GamesScore } from "../model/match";
import { Observable } from 'rxjs/Observable';
import { OSU_API, MATCHES } from "./links-const";
import { KEY } from "./key";

@Injectable()
export class MatchesService {
    results = []

    constructor(
        private http: HttpClient
    ) { }

    getMatches = (data: (matches: Match[]) => void) => {
        this.http.get(OSU_API + MATCHES + '?k=' + KEY)
        .subscribe(data)
    }

    getGames = this.getMatches

    getGamesScores = this.getMatches

}