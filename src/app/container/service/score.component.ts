import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OSU_API, SCORES } from "./links-const";
import { Observable } from 'rxjs/Observable';
import { Score } from "../model/score";
import { KEY } from "./key";

@Injectable()
export class ScoresService {
    results = []

    constructor(
        private http: HttpClient
    ) { }

    getScores(data: (scores: Score[]) => void) {
        return this.http.get(OSU_API + SCORES + '?k=' + KEY)
            .subscribe(data)
    }
}