export class Match {
    constructor(
        private match_match_id: string,
        private match_name: string,
        private match_start_time: string,
        private match_end_time: null,

        // not supported yet - always null
        private games: Games[]
    ) { }
}

export class Games {
    constructor(
        private game_id: string,
        private start_time: string,
        private end_time: string,
        private beatmap_id: string,

        // standard = 0, taiko = 1, ctb = 2, o!m = 3
        private play_mode: string,

        // couldn't find
        private match_type: string,

        // winning condition: score = 0, accuracy = 1, combo = 2, score v2 = 3
        private scoring_type: string,

        // Head to head = 0, Tag Co-op = 1, Team vs = 2, Tag Team vs = 3
        private team_type: string,

        // global mods, see reference below
        private mods: string,

        private games_scores: GamesScores[]
    ) { }
}

export class GamesScores {
    constructor(
        // 0 based index of player's slot
        private slot: string,

        // if mode doesn't support teams it is 0, otherwise 1 = blue, 2 = red
        private team: string,
        private user_id: string,
        private score: string,
        private maxcombo: string,

        // not used
        private rank: string,
        private count50: string,
        private count100: string,
        private count300: string,
        private countmiss: string,
        private countgeki: string,
        private countkatu: string,

        // full combo
        private perfect: string,

        // if player failed at the end of the map it is 0, otherwise (pass or revive) it is 1
        private pass: string
    ) { }
}