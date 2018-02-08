import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Match } from "../model/match";
import { OSU_API, MATCHES } from "./links-const";

@Injectable()
export class MatchesService {
    results = []

    constructor(
        private http: HttpClient
    ) { }

    getMatches(data: (matches: Match[]) => void) {
        return this.http.get(OSU_API + MATCHES)
            .subscribe(data)
    }
}