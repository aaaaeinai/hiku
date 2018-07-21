export class User {
    constructor(
        private user_id: string,
        private username: string,

        // Total amount for all ranked, approved, and loved beatmaps played
        private count300: string,
        private count100: string,
        private count50: string,

        // Only counts ranked, approved, and loved beatmaps
        private playcount: string,

        // Counts the best individual score on each ranked, approved, and loved beatmaps
        private ranked_score: string,

        // Counts every score on ranked, approved, and loved beatmaps
        private total_score: string,
        private pp_rank: string,
        private level: string,

        // For inactive players this will be 0 to purge them from leaderboards
        private pp_raw: string,
        private accuracy: string,
        private count_rank_ss: string,
        private count_rank_ssh: string,

        // Counts for SS/SSH/S/SH/A ranks on maps
        private count_rank_s: string,
        private count_rank_sh: string,
        private count_rank_a: string,

        // Uses the ISO3166-1 alpha-2 country code naming. See this for more information: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2/)
        private country: string,

        // The user's rank in the country.
        private pp_country_rank: string,

        // Contains events for this user
        private events: Event[]
    ) {}
}

export class Event {
    constructor(
        private display_html: string,
        private beatmap_id: string,
        private beatmapset_id: string,
        private date: string,

        // How "epic" this event is (between 1 and 32)
        private epicfactor: string
    ) {}
}
