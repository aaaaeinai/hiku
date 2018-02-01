export class UserRecent {
    constructor(
        private beatmap_id: string,
        private score: string,
        private maxcombo: string,
        private count50: string,
        private count100: string,
        private count300: string,
        private countmiss: string,
        private countkatu: string,
        private countgeki: string,

        // 1 = maximum combo of map reached, 0 otherwise
        private perfect: string,

        // bitwise flag representation of mods used. see reference
        private enabled_mods: string,
        private user_id: string,
        private date: string,
        private rank: string,
    ) { }
}