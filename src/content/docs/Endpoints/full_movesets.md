---
title: Full Movesets
description: This endpoint will return a list of moves for a specific character.
sidebar:
    order: 7
---

For full character movesets, you can use:

```
api.framedataapi.com/games/{game}/characters/{character name}
```

Which, in the case of, Chun-Li in the Street Fighter 6 endpoints, FDAPI would return this:

```
{
  "character": "chun-li",
  "id": "5",
  "normals": {
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
  },
  "command_normals": {
    "Swift_Thrust": {
      "move_name": "Swift Thrust",
      "nomenclature": "4/6MP",
      "startup": "7",
      "active_f": "3",
      "recovery": "15",
      "cancel": "SS Sp SA",
      "damage": "600",
      "guard": "LH",
      "on_hit": "+2",
      "on_block": "-3"
    },
    "Hakkei": {
      "move_name": "Hakkei",
      "nomenclature": "4HP",
      "startup": "8",
      "active_f": "6",
      "recovery": "14",
      "cancel": "SS Sp SA",
      "damage": "800",
      "guard": "LH",
      "on_hit": "+5",
      "on_block": "-1"
    },
    "Water_Lotus_Fist": {
      "move_name": "Water Lotus Fist",
      "nomenclature": "3HP",
      "startup": "21",
      "active_f": "4",
      "recovery": "14",
      "cancel": "SS",
      "damage": "800",
      "guard": "H",
      "on_hit": "+1",
      "on_block": "-2"
    },
    "Yokusen_Kick": {
      "move_name": "Yokusen Kick",
      "nomenclature": "6HK",
      "startup": "16",
      "active_f": "2",
      "recovery": "23",
      "cancel": "SS",
      "damage": "800",
      "guard": "LH",
      "on_hit": "-1",
      "on_block": "-4"
    },
    "Falling_Crane": {
      "move_name": "Falling Crane",
      "nomenclature": "3HK",
      "startup": "37",
      "active_f": "2",
      "recovery": "13",
      "cancel": "-",
      "damage": "800",
      "guard": "H",
      "on_hit": "+7",
      "on_block": "+3"
    },
    "Yoso_Kick": {
      "move_name": "Yoso Kick",
      "nomenclature": "j.2MK",
      "startup": "3",
      "active_f": "11",
      "recovery": "3 land",
      "cancel": "TC Sp SA",
      "damage": "300",
      "guard": "LH",
      "on_hit": "-",
      "on_block": "-"
    }
  },
  "target_combos": {
    "Soaring_Eagle_Punches": {
      "move_name": "Soaring Eagle Punches",
      "nomenclature": "j.HP~j.HP",
      "startup": "6",
      "active_f": "4",
      "recovery": "3 land",
      "cancel": "-",
      "damage": "500",
      "guard": "H",
      "on_hit": "-",
      "on_block": "-"
    },
    "Yoso_Kick_2": {
      "move_name": "Yoso Kick 2",
      "nomenclature": "j.2MK~j.2MK",
      "startup": "6",
      "active_f": "11",
      "recovery": "3 land",
      "cancel": "TC Sp SA",
      "damage": "300",
      "guard": "LH",
      "on_hit": "-",
      "on_block": "-"
    },
    "Yoso_Kick_3": {
      "move_name": "Yoso Kick 3",
      "nomenclature": "j.2MK~j.2MK~j.2MK",
      "startup": "6",
      "active_f": "11",
      "recovery": "3 land",
      "cancel": "Sp SA",
      "damage": "500",
      "guard": "LH",
      "on_hit": "-",
      "on_block": "-"
    }
  },
  "throws": {
    "Koshuto": {
      "move_name": "Koshuto",
      "nomenclature": "LPLK",
      "startup": "5",
      "active_f": "3",
      "recovery": "23",
      "cancel": "-",
      "damage": "1200 (2040)",
      "guard": "T",
      "on_hit": "KD +11",
      "on_block": "-"
    },
    "Taiji_Fan": {
      "move_name": "Taiji Fan",
      "nomenclature": "4LPLK",
      "startup": "5",
      "active_f": "3",
      "recovery": "23",
      "cancel": "-",
      "damage": "1200 (2040)",
      "guard": "T",
      "on_hit": "KD +13",
      "on_block": "-"
    },
    "Ryuseiraku": {
      "move_name": "Ryuseiraku",
      "nomenclature": "j.LPLK",
      "startup": "5",
      "active_f": "3",
      "recovery": "3 land",
      "cancel": "-",
      "damage": "1200 (2040)",
      "guard": "T",
      "on_hit": "KD +10",
      "on_block": "-"
    }
  },
  "drive_system": {
    "Hosen_Kick": {
      "move_name": "Hosen Kick",
      "nomenclature": "HPHK",
      "startup": "26",
      "active_f": "2",
      "recovery": "35",
      "cancel": "-",
      "damage": "800",
      "guard": "LH",
      "on_hit": "KD +35 / Wall Splat KD +65",
      "on_block": "-3 / Wall Splat HKD +72"
    },
    "Hoyoku_Kick_(Recovery)": {
      "move_name": "Hoyoku Kick (Recovery)",
      "nomenclature": "6HPHK",
      "startup": "18",
      "active_f": "3(10)3",
      "recovery": "26(33)",
      "cancel": "-",
      "damage": "250x2 recoverable",
      "guard": "LH",
      "on_hit": "KD +23",
      "on_block": "-6"
    },
    "Drive_Parry": {
      "move_name": "Drive Parry",
      "nomenclature": "MPMK",
      "startup": "1",
      "active_f": "12 or until released",
      "recovery": "33(1)(11)",
      "cancel": "-",
      "damage": "-",
      "guard": "-",
      "on_hit": "-",
      "on_block": "-"
    },
    "Parry_Drive_Rush": {
      "move_name": "Parry Drive Rush",
      "nomenclature": "MPMK~66",
      "startup": "3+8",
      "active_f": "-",
      "recovery": "15(37)",
      "cancel": "-",
      "damage": "-",
      "guard": "-",
      "on_hit": "-",
      "on_block": "-"
    },
    "Drive_Rush_Cancel": {
      "move_name": "Drive Rush Cancel",
      "nomenclature": "MPMK or 66",
      "startup": "9",
      "active_f": "-",
      "recovery": "15(37)",
      "cancel": "-",
      "damage": "-",
      "guard": "-",
      "on_hit": "-",
      "on_block": "-"
    }
  },
  "special_moves": {
    "Kikoken": {
      "move_name": "Kikoken",
      "nomenclature": "[4]6LP",
      "startup": "15",
      "active_f": "[90]",
      "recovery": "32",
      "cancel": "SA3",
      "damage": "600",
      "guard": "LH",
      "on_hit": "-3",
      "on_block": "-7"
    },
    "M_Kikoken": {
      "move_name": "M_Kikoken",
      "nomenclature": "[4]6MP",
      "startup": "12",
      "active_f": "[55]",
      "recovery": "33",
      "cancel": "SA3",
      "damage": "600",
      "guard": "LH",
      "on_hit": "-3",
      "on_block": "-7"
    },
    "H_Kikoken": {
      "move_name": "H_Kikoken",
      "nomenclature": "[4]6HP",
      "startup": "11",
      "active_f": "[25]",
      "recovery": "32",
      "cancel": "SA3",
      "damage": "600",
      "guard": "LH",
      "on_hit": "-2",
      "on_block": "-6"
    },
    "EX_Kikoken": {
      "move_name": "EX_Kikoken",
      "nomenclature": "[4]6PP",
      "startup": "11",
      "active_f": "-",
      "recovery": "28",
      "cancel": "SA2 SA3",
      "damage": "400x2",
      "guard": "LH",
      "on_hit": "+5",
      "on_block": "0"
    },
    "Hundred_Lightning_Kicks": {
      "move_name": "Hundred Lightning Kicks",
      "nomenclature": "236KK",
      "startup": "8",
      "active_f": "2(4)2(4)2(4)2(4)2",
      "recovery": "21",
      "cancel": "SA2 SA3 (5th)",
      "damage": "160x5 (800)",
      "guard": "LH",
      "on_hit": "+3",
      "on_block": "-3"
    },
    "Lightning_Kick_Barrage": {
      "move_name": "Lightning Kick Barrage",
      "nomenclature": "236KK~KK",
      "startup": "11",
      "active_f": "2(5)2(4)2(5)2(13)3",
      "recovery": "25",
      "cancel": "-",
      "damage": "100x4,300 (700)",
      "guard": "LH",
      "on_hit": "KD +29",
      "on_block": "-13"
    },
    "Aerial_Hundred_Lightning_Kicks": {
      "move_name": "Aerial Hundred Lightning Kicks",
      "nomenclature": "j.236KK",
      "startup": "6",
      "active_f": "2(4)2(2)2(3)2(2)2(3)2",
      "recovery": "5 land",
      "cancel": "-",
      "damage": "250x5,350 (1600)",
      "guard": "LH",
      "on_hit": "KD +38~39",
      "on_block": "-32(-16)"
    },
    "Spinning_Bird_Kick": {
      "move_name": "Spinning Bird Kick",
      "nomenclature": "[2]8KK",
      "startup": "16",
      "active_f": "2(4)2(4)2(5)2(4)2(5)2(4)2",
      "recovery": "8+15 land",
      "cancel": "-",
      "damage": "100x6,200 (800)",
      "guard": "LH",
      "on_hit": "KD +55(+41)",
      "on_block": "-12"
    },
    "Hazanshu": {
      "move_name": "Hazanshu",
      "nomenclature": "214LK",
      "startup": "23",
      "active_f": "2",
      "recovery": "21",
      "cancel": "SA3",
      "damage": "1000",
      "guard": "H",
      "on_hit": "0",
      "on_block": "-9"
    },
    "M_Hazanshu": {
      "move_name": "M_Hazanshu",
      "nomenclature": "214MK",
      "startup": "27",
      "active_f": "3",
      "recovery": "16",
      "cancel": "SA3",
      "damage": "1000",
      "guard": "H",
      "on_hit": "+2",
      "on_block": "-3"
    },
    "H_Hazanshu": {
      "move_name": "H_Hazanshu",
      "nomenclature": "214HK",
      "startup": "32",
      "active_f": "3",
      "recovery": "16(18)",
      "cancel": "SA3",
      "damage": "1200",
      "guard": "H",
      "on_hit": "+6",
      "on_block": "-1"
    },
    "EX_Hazanshu": {
      "move_name": "EX_Hazanshu",
      "nomenclature": "214KK",
      "startup": "26",
      "active_f": "3",
      "recovery": "16",
      "cancel": "SA2 SA3",
      "damage": "1200",
      "guard": "H",
      "on_hit": "KD +52 OTG",
      "on_block": "-5"
    },
    "Tensho_Kicks": {
      "move_name": "Tensho Kicks",
      "nomenclature": "22KK",
      "startup": "6",
      "active_f": "3(5)3",
      "recovery": "16+25 land",
      "cancel": "-",
      "damage": "180x5,500 (1400)",
      "guard": "LH",
      "on_hit": "KD +30",
      "on_block": "-40"
    }
  },
  "super_arts": {
    "Kikosho": {
      "move_name": "Kikosho",
      "nomenclature": "236236P",
      "startup": "7",
      "active_f": "70",
      "recovery": "46",
      "cancel": "-",
      "damage": "300x4,500 (1700)",
      "guard": "LH",
      "on_hit": "KD +22",
      "on_block": "-22"
    },
    "Aerial_Kikosho": {
      "move_name": "Aerial Kikosho",
      "nomenclature": "j.236236P",
      "startup": "7",
      "active_f": "50",
      "recovery": "16 land",
      "cancel": "-",
      "damage": "300x4,800 (2000)",
      "guard": "LH",
      "on_hit": "KD +14",
      "on_block": "-20"
    },
    "Hoyoku-sen": {
      "move_name": "Hoyoku-sen",
      "nomenclature": "236236K",
      "startup": "11",
      "active_f": "[2(1)x3],2(2),[2(1)x3],2(11),[2(2)x6],2(23)3",
      "recovery": "48",
      "cancel": "Jmp",
      "damage": "2000(1000)",
      "guard": "LH",
      "on_hit": "KD +29",
      "on_block": "-35"
    },
    "Soten_Ranka_(CA)": {
      "move_name": "Soten Ranka (CA)",
      "nomenclature": "214214K",
      "startup": "8",
      "active_f": "2(24)1(7)1",
      "recovery": "40",
      "cancel": "-",
      "damage": "4500 (500x2)",
      "guard": "LH",
      "on_hit": "HKD +18",
      "on_block": "-24"
    }
  },
  "taunts": {
    "Neutral_Taunt": {
      "move_name": "Neutral Taunt",
      "nomenclature": "5PPPKKK",
      "startup": "35",
      "active_f": "2",
      "recovery": "70",
      "cancel": "-",
      "damage": "300",
      "guard": "LH",
      "on_hit": "-58",
      "on_block": "-65"
    },
    "Forward_Taunt": {
      "move_name": "Forward Taunt",
      "nomenclature": "6PPPKKK",
      "startup": "273 (total)",
      "active_f": "-",
      "recovery": "-",
      "cancel": "-",
      "damage": "-",
      "guard": "-",
      "on_hit": "-",
      "on_block": "-"
    },
    "Back_Taunt": {
      "move_name": "Back Taunt",
      "nomenclature": "4PPPKKK",
      "startup": "401 (total)",
      "active_f": "-",
      "recovery": "-",
      "cancel": "-",
      "damage": "-",
      "guard": "-",
      "on_hit": "-",
      "on_block": "-"
    }
  },
  "serenity_stance": {
    "Serenity_Stream": {
      "move_name": "Serenity Stream",
      "nomenclature": "214P",
      "startup": "14(~)",
      "active_f": "[57~]",
      "recovery": "-",
      "cancel": "-",
      "damage": "-",
      "guard": "-",
      "on_hit": "-",
      "on_block": "-"
    },
    "Serenity_Stream_Exit": {
      "move_name": "Serenity Stream Exit",
      "nomenclature": "214P~214P",
      "startup": "-",
      "active_f": "-",
      "recovery": "23(18)",
      "cancel": "-",
      "damage": "-",
      "guard": "-",
      "on_hit": "-",
      "on_block": "-"
    },
    "Orchid_Palm": {
      "move_name": "Orchid Palm",
      "nomenclature": "214P~LP",
      "startup": "5",
      "active_f": "5",
      "recovery": "16[36]",
      "cancel": "Sp SA",
      "damage": "500",
      "guard": "LH",
      "on_hit": "-2(-22)",
      "on_block": "-3(-23)"
    },
    "Snake_Strike": {
      "move_name": "Snake Strike",
      "nomenclature": "214P~MP",
      "startup": "11",
      "active_f": "7",
      "recovery": "19[32]",
      "cancel": "-",
      "damage": "750",
      "guard": "L",
      "on_hit": "KD +38(+44)[KD +25(+31)]",
      "on_block": "-10(-4)[-23(-17)]"
    },
    "Lotus_Fist": {
      "move_name": "Lotus Fist",
      "nomenclature": "214P~HP",
      "startup": "23",
      "active_f": "2(6)2",
      "recovery": "19",
      "cancel": "Sp SA",
      "damage": "400,500",
      "guard": "H,H",
      "on_hit": "+2",
      "on_block": "-3"
    },
    "Forward_Strike": {
      "move_name": "Forward Strike",
      "nomenclature": "214P~LK",
      "startup": "8",
      "active_f": "5",
      "recovery": "13[36]",
      "cancel": "Sp SA",
      "damage": "500",
      "guard": "L",
      "on_hit": "0(-23)",
      "on_block": "-4(-27)"
    },
    "Senpu_Kick": {
      "move_name": "Senpu Kick",
      "nomenclature": "214P~MK",
      "startup": "10",
      "active_f": "5",
      "recovery": "22[46]",
      "cancel": "Sp SA",
      "damage": "800",
      "guard": "L",
      "on_hit": "-5(-29)",
      "on_block": "-9(-33)"
    },
    "Tenku_Kick": {
      "move_name": "Tenku Kick",
      "nomenclature": "214P~HK",
      "startup": "8",
      "active_f": "5",
      "recovery": "24",
      "cancel": "Jmp",
      "damage": "700",
      "guard": "LH",
      "on_hit": "KD +41",
      "on_block": "-9"
    }
  }
}
```