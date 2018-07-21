import { KEY } from './key';
import { Beatmap } from '../model/beatmap';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OSU_API, BEATMAPS } from './links-const';
import { AccountsService } from './account.service';

@Injectable()
export class BeatmapsService {
    results = [];

    constructor(
        private http: HttpClient,
        private accountService: AccountsService,
    ) {}

    getBeatmaps(data: (beatmaps: Beatmap[]) => void) {
        return this.http
            .get(
                OSU_API +
                    BEATMAPS +
                    '?k=' +
                    this.accountService.getAccount().apikey,
            )
            .subscribe(data);
    }
}
