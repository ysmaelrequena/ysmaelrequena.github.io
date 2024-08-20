---
title: Move Type List Per Character
description: This endpoint will return a list the available type of moves a character has.
sidebar:
    order: 8
---

Sometimes, as development of some fighting games move forward, characters can be retooled or they can get new moves, stances, etc.
<br />

To determine if a character has a special stance (for example, Chun-Li with her Serenity Stream stance) or a special state that gives them access to new moves, you can use the following endpoint: 

```
api.framedataapi.com/games/{game}/characters//{character name}/movetype_list_name
```

Which, for Chun-Li would be:

```
{
  "0": "normals",
  "1": "command_normals",
  "2": "target_combos",
  "3": "throws",
  "4": "drive_system",
  "5": "special_moves",
  "6": "super_arts",
  "7": "taunts",
  "8": "serenity_stance"
}
```