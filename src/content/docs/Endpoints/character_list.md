---
title: Character List with IDs
description: This endpoint will return a list of the character for the selected game, with their respectives IDs in the db.
sidebar:
    order: 6
---

If the user wants to retrieve a list of the names of the character in their respective game, the following endpoint does the trick:

```
api.framedataapi.com/games/{game}/characters/
```

Which, in the case of the Street Fighter 6 endpoints, the API would return this:

```
{
  "1": "AKUMA",
  "2": "A.K.I",
  "3": "BLANKA",
  "4": "CAMMY",
  "5": "CHUN-LI",
  "6": "DEE-JAY",
  "7": "DHALSIM",
  "8": "ED",
  "9": "E. HONDA",
  "10": "GUILE",
  "11": "J.P",
  "12": "JAMIE",
  "13": "JURI",
  "14": "KEN",
  "15": "KIMBERLY",
  "16": "LILY",
  "17": "LUKE",
  "18": "M.BISON",
  "19": "MANON",
  "20": "MARISA",
  "21": "RASHID",
  "22": "RYU",
  "23": "ZANGIEF"
}
```