import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BeatmapsService } from '../../../container/service/beatmaps.service';

@Component({
    selector: 'app-beatmap-detail',
    templateUrl: './beatmap-detail.component.html',
})
export class BeatmapDetailComponent {
    beatmapForm: FormGroup; // <--- heroForm is of type FormGroup

    constructor(private fb: FormBuilder) {
        // <--- inject FormBuilder
        this.createForm();
    }

    createForm() {
        this.beatmapForm = this.fb.group({
            approved: ['', Validators.required],
            approved_date: ['', Validators.required],
            last_update: ['', Validators.required],
            artist: ['', Validators.required],
            beatmap_id: ['', Validators.required],
            beatmapset_id: ['', Validators.required],
            bpm: ['', Validators.required],
            creator: ['', Validators.required],
            difficultyrating: ['', Validators.required],
            diff_size: ['', Validators.required],
            diff_overall: ['', Validators.required],
            diff_approach: ['', Validators.required],
            diff_drain: ['', Validators.required],
            hit_length: ['', Validators.required],
            source: ['', Validators.required],
            genre_id: ['', Validators.required],
            language_id: ['', Validators.required],
            title: ['', Validators.required],
            total_length: ['', Validators.required],
            version: ['', Validators.required],
            file_md5: ['', Validators.required],
            mode: ['', Validators.required],
            tags: ['', Validators.required],
            favourite_count: ['', Validators.required],
            playcount: ['', Validators.required],
            passcount: ['', Validators.required],
            max_combo: ['', Validators.required],
        });
    }
}
