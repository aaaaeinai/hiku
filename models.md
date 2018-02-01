# hiku models

## url: /api/get_beatmaps

```json
[{
	"approved"         : "1",                   // 4 = loved, 3 = qualified, 2 = approved, 1 = ranked, 0 = pending, -1 = WIP, -2 = graveyard
	"approved_date"    : "2013-07-02 01:01:12", // date ranked, UTC+8 for now
	"last_update"      : "2013-07-06 16:51:22", // last update date, timezone same as above. May be after approved_date if map was unranked and reranked.
	"artist"           : "Luxion",
	"beatmap_id"       : "252002",              // beatmap_id is per difficulty
	"beatmapset_id"    : "93398",               // beatmapset_id groups difficulties into a set
	"bpm"              : "196",
	"creator"          : "RikiH_",
	"difficultyrating" : "5.59516",             // The amount of stars the map would have ingame and on the website
	"diff_size"        : "4",                   // Circle size value (CS)
	"diff_overall"     : "6",                   // Overall difficulty (OD)
	"diff_approach"    : "7",                   // Approach Rate (AR)
	"diff_drain"       : "6",                   // Healthdrain (HP)
	"hit_length"       : "113",                 // seconds from first note to last note not including breaks
	"source"           : "BMS",
	"genre_id"         : "1",                   // 0 = any, 1 = unspecified, 2 = video game, 3 = anime, 4 = rock, 5 = pop, 6 = other, 7 = novelty, 9 = hip hop, 10 = electronic (note that there's no 8)
	"language_id"      : "5",                   // 0 = any, 1 = other, 2 = english, 3 = japanese, 4 = chinese, 5 = instrumental, 6 = korean, 7 = french, 8 = german, 9 = swedish, 10 = spanish, 11 = italian
	"title"            : "High-Priestess",      // song name
	"total_length"     : "145",                 // seconds from first note to last note including breaks
	"version"          : "Overkill",            // difficulty name
	"file_md5"         : "c8f08438204abfcdd1a748ebfae67421",
                                                // md5 hash of the beatmap
	"mode"             : "0",                   // game mode,
	"tags"             : "melodious long",      // Beatmap tags separated by spaces.
	"favourite_count"  : "121",                 // Number of times the beatmap was favourited. (americans: notice the ou!)
	"playcount"        : "9001",                // Number of times the beatmap was played
	"passcount"        : "1337",                // Number of times the beatmap was passed, completed (the user didn't fail or retry)
    "max_combo"        : "2101"                 // The maximum combo a user can reach playing this beatmap.
}]
```

## url: /api/get_user

```json
[{
	"user_id"      : "1",
	"username"     : "User name",
	"count300"     : "1337",      // Total amount for all ranked, approved, and loved beatmaps played
	"count100"     : "123",       // Total amount for all ranked, approved, and loved beatmaps played
	"count50"      : "69",        // Total amount for all ranked, approved, and loved beatmaps played
	"playcount"    : "42",        // Only counts ranked, approved, and loved beatmaps
	"ranked_score" : "666666",    // Counts the best individual score on each ranked, approved, and loved beatmaps
	"total_score"  : "999999998", // Counts every score on ranked, approved, and loved beatmaps
	"pp_rank"      : "2442",
	"level"        : "50.5050",
	"pp_raw"       : "3113",      // For inactive players this will be 0 to purge them from leaderboards
	"accuracy"     : "98.1234",
	"count_rank_ss": "54",
	"count_rank_ssh": "54",
	"count_rank_s" : "81",        // Counts for SS/SSH/S/SH/A ranks on maps
	"count_rank_sh" : "81",
	"count_rank_a" : "862",    
	"country"      : "DE",        // Uses the ISO3166-1 alpha-2 country code naming. See this for more information: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2/)
	"pp_country_rank":"1337",     // The user's rank in the country.
	"events"       : [{           // Contains events for this user
		"display_html"	: "<img src='\/images\/A_small.png'\/>...",
		"beatmap_id"	: "222342",
		"beatmapset_id"	: "54851",
		"date"		: "2013-07-07 22:34:04",
		"epicfactor"	: "1"      // How "epic" this event is (between 1 and 32)
	}, { ... }, ...]
}]
```

## url: /api/get_scores

```json
[{
	"score_id"     : "7654321",
	"score"        : "1234567",
	"username"     : "User name",
	"count300"     : "300",
	"count100"     : "50",
	"count50"      : "10",
	"countmiss"    : "1",
	"maxcombo"     : "321",
	"countkatu"    : "10",
	"countgeki"    : "50",
	"perfect"      : "0",          // 1 = maximum combo of map reached, 0 otherwise
	"enabled_mods" : "76",         // bitwise flag representation of mods used. see reference
	"user_id"      : "1",
	"date"         : "2013-06-22 9:11:16",
	"rank"         : "SH",
	"pp"           : "1.3019"         //Float value , 4 decimals
}]
```

## url: /api/get_user_best

```json
[{
	"beatmap_id"   : "222342",
	"score"        : "1234567",
	"maxcombo"     : "321",
	"count300"     : "300",
	"count100"     : "50",
	"count50"      : "10",
	"countmiss"    : "1",
	"countkatu"    : "10",
	"countgeki"    : "50",
	"perfect"      : "0",          // 1 = maximum combo of map reached, 0 otherwise
	"enabled_mods" : "76",         // bitwise flag representation of mods used. see reference
	"user_id"      : "1",
	"date"         : "2013-06-22 9:11:16",
	"rank"         : "SH",
	"pp"           : "1.3019"         //Float value , 4 decimals
}, { ... }, ...]
```
## /api/get_user_recent

```json
[{
	"beatmap_id"   : "987654",
	"score"        : "1234567",
	"maxcombo"     : "321",
	"count50"      : "10",
	"count100"     : "50",
	"count300"     : "300",
	"countmiss"    : "1",
	"countkatu"    : "10",
	"countgeki"    : "50",
	"perfect"      : "0",          // 1 = maximum combo of map reached, 0 otherwise
	"enabled_mods" : "76",         // bitwise flag representation of mods used. see reference
	"user_id"      : "1",
	"date"         : "2013-06-22 9:11:16",
	"rank"         : "SH"
}, { ... }, ...]
```