import { Component } from "@angular/core"; 
import { Beatmap } from "../../../container/model/beatmap";
import { BeatmapsService } from "../../../container/service/beatmaps.service";

@Component({
    selector: 'app-beatmap-list',
    templateUrl: './beatmap-list.component.html'
})
export class BeatmapListComponent {

    beatmapList: Beatmap[]

    constructor(
        private bs: BeatmapsService
    ) {
        this.createList()
    }
 
    createList() {
        this.bs.getBeatmaps(beatmapList => this.beatmapList = beatmapList)
    }
}