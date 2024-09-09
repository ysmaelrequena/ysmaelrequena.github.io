---
title: Moves Separated By Type
description: This endpoint will return a list of the moves that a character for a previosly selected type.
sidebar:
    order: 9
---

Finally, if you want FDAPI to return a list of moves that belong to a specific type of attack, you can call this endpoint:

```
api.framedataapi.com/games/{game}/characters//{character name}/{movetype}
```

Which, for Chun-Li's normal moves, the result would be:

```
{
  "Standing_Light_Punch": {
    "move_name": "Standing Light Punch",
    "nomenclature": "5LP",
    "startup": "4",
    "active_f": "3",
    "recovery": "7",
    "cancel": "SS Chn Sp SA",
    "damage": "300",
    "guard": "LH",
    "on_hit": "+5",
    "on_block": "-3"
  },
  "Standing_Medium_Punch": {
    "move_name": "Standing Medium Punch",
    "nomenclature": "5MP",
    "startup": "5",
    "active_f": "4",
    "recovery": "10",
    "cancel": "SS Sp SA",
    "damage": "600",
    "guard": "LH",
    "on_hit": "+6",
    "on_block": "+1"
  },
  "Standing_Heavy_Punch": {
    "move_name": "Standing Heavy Punch",
    "nomenclature": "5HP",
    "startup": "13",
    "active_f": "3",
    "recovery": "20",
    "cancel": "SS",
    "damage": "800",
    "guard": "LH",
    "on_hit": "+2",
    "on_block": "-3"
  },
  "Standing_Light_Kick": {
    "move_name": "Standing Light Kick",
    "nomenclature": "5LK",
    "startup": "5",
    "active_f": "3",
    "recovery": "10",
    "cancel": "SS Sp SA",
    "damage": "300",
    "guard": "LH",
    "on_hit": "+2",
    "on_block": "-2"
  },
  "Standing_Medium_Kick": {
    "move_name": "Standing Medium Kick",
    "nomenclature": "5MK",
    "startup": "7",
    "active_f": "4",
    "recovery": "16",
    "cancel": "SS Sp SA",
    "damage": "500",
    "guard": "LH",
    "on_hit": "+4",
    "on_block": "-2"
  },
  "Standing_Heavy_Kick": {
    "move_name": "Standing Heavy Kick",
    "nomenclature": "5HK",
    "startup": "14",
    "active_f": "3",
    "recovery": "18",
    "cancel": "SS",
    "damage": "900",
    "guard": "LH",
    "on_hit": "+4",
    "on_block": "0"
  },
  "Crouching_Light_Punch": {
    "move_name": "Crouching Light Punch",
    "nomenclature": "2LP",
    "startup": "4",
    "active_f": "3",
    "recovery": "7",
    "cancel": "SS Chn Sp SA",
    "damage": "300",
    "guard": "LH",
    "on_hit": "+4",
    "on_block": "-2"
  },
  "Crouching_Medium_Punch": {
    "move_name": "Crouching Medium Punch",
    "nomenclature": "2MP",
    "startup": "6",
    "active_f": "4",
    "recovery": "13",
    "cancel": "SS Sp SA",
    "damage": "600",
    "guard": "LH",
    "on_hit": "+4",
    "on_block": "-2"
  },
  "Crouching_Heavy_Punch": {
    "move_name": "Crouching Heavy Punch",
    "nomenclature": "2HP",
    "startup": "11",
    "active_f": "3(5)5",
    "recovery": "18",
    "cancel": "SS Sp SA (2nd)",
    "damage": "450x2",
    "guard": "LH",
    "on_hit": "+1",
    "on_block": "-3"
  },
  "Crouching_Light_Kick": {
    "move_name": "Crouching Light Kick",
    "nomenclature": "2LK",
    "startup": "4",
    "active_f": "2",
    "recovery": "10",
    "cancel": "SS Chn Sp SA",
    "damage": "200",
    "guard": "L",
    "on_hit": "0",
    "on_block": "-2"
  },
  "Crouching_Medium_Kick": {
    "move_name": "Crouching Medium Kick",
    "nomenclature": "2MK",
    "startup": "7",
    "active_f": "3",
    "recovery": "19",
    "cancel": "SS Sp SA",
    "damage": "500",
    "guard": "L",
    "on_hit": "-2",
    "on_block": "-6"
  },
  "Crouching_Heavy_Kick": {
    "move_name": "Crouching Heavy Kick",
    "nomenclature": "2HK",
    "startup": "9",
    "active_f": "6",
    "recovery": "19",
    "cancel": "SS",
    "damage": "900",
    "guard": "L",
    "on_hit": "HKD +33",
    "on_block": "-7"
  },
  "Jumping_Light_Punch": {
    "move_name": "Jumping Light Punch",
    "nomenclature": "j.LP",
    "startup": "4",
    "active_f": "10",
    "recovery": "3 land",
    "cancel": "-",
    "damage": "300",
    "guard": "H",
    "on_hit": "-",
    "on_block": "-"
  },
  "Jumping_Medium_Punch": {
    "move_name": "Jumping Medium Punch",
    "nomenclature": "j.MP",
    "startup": "7",
    "active_f": "4(6)5",
    "recovery": "3 land",
    "cancel": "Sp SA1",
    "damage": "300x2",
    "guard": "H",
    "on_hit": "-",
    "on_block": "-"
  },
  "Jumping_Heavy_Punch": {
    "move_name": "Jumping Heavy Punch",
    "nomenclature": "j.HP",
    "startup": "9",
    "active_f": "6",
    "recovery": "3 land",
    "cancel": "TC",
    "damage": "800(500)",
    "guard": "H",
    "on_hit": "-",
    "on_block": "-"
  },
  "Jumping_Light_Kick": {
    "move_name": "Jumping Light Kick",
    "nomenclature": "j.LK",
    "startup": "4",
    "active_f": "8",
    "recovery": "3 land",
    "cancel": "-",
    "damage": "300",
    "guard": "H",
    "on_hit": "-",
    "on_block": "-"
  },
  "Jumping_Medium_Kick": {
    "move_name": "Jumping Medium Kick",
    "nomenclature": "j.MK",
    "startup": "6",
    "active_f": "5",
    "recovery": "3 land",
    "cancel": "-",
    "damage": "500",
    "guard": "H",
    "on_hit": "-",
    "on_block": "-"
  },
  "Jumping_Heavy_Kick": {
    "move_name": "Jumping Heavy Kick",
    "nomenclature": "7HK or 9HK",
    "startup": "8",
    "active_f": "5",
    "recovery": "3 land",
    "cancel": "-",
    "damage": "800",
    "guard": "H",
    "on_hit": "-",
    "on_block": "-"
  },
  "Neutral_Jump_Heavy_Kick": {
    "move_name": "Neutral Jump Heavy Kick",
    "nomenclature": "8HK",
    "startup": "8",
    "active_f": "7",
    "recovery": "3 land",
    "cancel": "-",
    "damage": "800",
    "guard": "H",
    "on_hit": "-",
    "on_block": "-"
  },
  "Wall_Jump": {
    "move_name": "Wall Jump",
    "nomenclature": "9 (against wall)",
    "startup": "-",
    "active_f": "-",
    "recovery": "-",
    "cancel": "-",
    "damage": "-",
    "guard": "-",
    "on_hit": "-",
    "on_block": "-"
  }
}
```