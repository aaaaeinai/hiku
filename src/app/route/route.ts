import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BeatmapListComponent } from "../component/beatmap/beatmap-list/beatmap-list.component";

const appRoutes: Routes = [
    { path: '', component: BeatmapListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }