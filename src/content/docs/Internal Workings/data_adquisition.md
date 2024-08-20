---
title: Retrieving The Data From The FDAPI Database
description: How FDAPI retrieves data from the database when it gets a GET request.
sidebar:
    order: 4
---

###                                        Adquiring the data from the DB
<br />
I created a moduled called 'database_queries', in which the system queries the data for the character requested in the API whenever it gets a GET request. The module also includes a function which retrieves the
character list with their respective IDs.
