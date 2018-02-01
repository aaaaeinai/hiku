// Contains events for this user
export class Events {
    constructor(
        private display_html: string,
        private beatmap_id: string,
        private beatmapset_id: string,
        private date: string,

        // How "epic" this event is (between 1 and 32)
        private epicfactor: string
    ) {}
}