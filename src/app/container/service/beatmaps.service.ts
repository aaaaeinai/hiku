import { KEY } from "./key";
import { Beatmap } from "../model/beatmap";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { OSU_API, BEATMAPS } from "./links-const";

@Injectable()
export class BeatmapsService {
    results = []

    constructor(
        private http: HttpClient
    ) { }

    getBeatmaps(data: (beatmaps: Beatmap[]) => void) {
        return this.http.get(OSU_API + BEATMAPS + '?k=' + KEY)
            .subscribe(data)
    }
}