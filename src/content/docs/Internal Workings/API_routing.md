---
title: FDAPI Routes
description: How FDAPI routes the information it contains to its endpoints.
sidebar:
    order: 5
---

###                                        Routing the data
<br />
After running the functions described above, the endpoints included in the 'sf6_endpoints' module are called by the 'main' module and they're routed using FastAPI's integrated router system, whenever the user does a GET request, the information is displayed.
