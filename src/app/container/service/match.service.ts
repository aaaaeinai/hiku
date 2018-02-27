import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Match, Game } from "../model/match";
import { Observable } from 'rxjs/Observable';
import { OSU_API, MATCHES } from "./links-const";
import { KEY } from "./key";

@Injectable()
export class MatchesService {
    results = []

    constructor(
        private http: HttpClient
    ) { }

    getMatchesAndGames(data: (matches: { match: Match, games: Game[] }[]) => void) {
        return this.http.get(OSU_API + MATCHES + '?k=' + KEY)
            .subscribe(data)
    }

    getMatches(data: (matches: Match[]) => void) {
        return this.http.get(OSU_API + MATCHES + '?k=' + KEY)
            .subscribe(data)
    }

    // TODO: Games http logic goes here
    getGames(games: Game[]) {
        return this.http.get(OSU_API + MATCHES + '?k=' + KEY)
            .subscribe((data: Match[]) => {
                data.forEach((match: Match) => {
                    match["games"].forEach((matchGames: Game[]) => {
                        this.results = data
                        games = matchGames
                    });
                });
            })
    }
}