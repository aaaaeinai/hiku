export class Beatmap {
    constructor(
        // 4 = loved, 3 = qualified, 2 = approved, 1 = ranked, 0 = pending, -1 = WIP, -2 = graveyard
        private approved: string,

        // date ranked, UTC+8 for now
        private approved_date: string,

        // last update date, timezone same as above. May be after approved_date if map was unranked and reranked.
        private last_update: string,

        private artist: string,

        // beatmap_id is per difficulty
        private beatmap_id: string,

        // beatmapset_id groups difficulties into a set
        private beatmapset_id: string,

        private bpm: string,
        private creator: string,

        // The amount of stars the map would have ingame and on the website
        private difficultyrating: string,

        // Circle size value (CS)
        private diff_size: string,

        // Overall difficulty (OD)
        private diff_overall: string,

        // Approach Rate (AR)
        private diff_approach: string,

        // Healthdrain (HP)
        private diff_drain: string,

        // seconds from first note to last note not including breaks
        private hit_length: string,

        private source: string,
        
        // 0 = any, 1 = unspecified, 2 = video game, 3 = anime, 4 = rock, 5 = pop, 6 = other, 7 = novelty, 9 = hip hop, 10 = electronic (note that there's no 8)
        private genre_id: string,

        // 0 = any, 1 = other, 2 = english, 3 = japanese, 4 = chinese, 5 = instrumental, 6 = korean, 7 = french, 8 = german, 9 = swedish, 10 = spanish, 11 = italian
        private language_id: string,

        // song name
        private title: string,

        // seconds from first note to last note including breaks
        private total_length: string,

        // difficulty name
        private version: string,

        // md5 hash of the beatmap
        private file_md5: string,

        // game mode
        private mode: string,

        // Beatmap tags separated by spaces.
        private tags: string,

        // Number of times the beatmap was favourited. (americans: notice the ou!)
        private favourite_count: string,

        // Number of times the beatmap was played
        private playcount: string,

        // Number of times the beatmap was passed, completed (the user didn't fail or retry)
        private passcount: string,

        // The maximum combo a user can reach playing this beatmap.
        private max_combo: string
    ) {}
}