---
title: How FDAPI Was Built
description: This is the creative process behind the creation of FDAPI.
sidebar:
    order: 2
---

##                                       How did I build it?

<br />


###                                        The "Character_class" module

FDPI was built with Python in tandem with the FastAPI framework, which is equipped with several features that helped me streamline the creation process. Aside from that, 
I reutilized the Web Scraper from my last project: "The Street Fighter 6 Frame Data CLI Tool", but I adapted it to use a different approach this time that makes it easier 
to maintain and update in the long term: instead of just scraping and dropping everythin into a database, I followed the 'Builder' design pattern, and created a class which was 
initialized with four properties: two ("name" and "url") that are to be set up at the moment of calling the class to get the information to the database, and two ("htmltext" 
and "framedata") that are initialized as None because they're going to be mutated into the HTML of the web page and the character's frame data by the methods I wrote into the
class. This is all contained in the "Character_class" module that is inside the routers/SF6 directory of the project.

The three methods inside this "Character" class are the following:

```
set_htmltext(self)
```

- Gets the HTML from the website it's scraping and it assigns it to the "htmltext" property of the "Character" class.

```
character_scrape(self)
```

- This method contains the web scraper, it goes to the web page, in this case Supercombo wiki (for any character), and extracts the information, stores it into multiple dictionaries and
these are appended into a "character_framedata" dictionary, thus creating a dictionary that contains all the frame data for the character in an organized way that's easy to handle.

```
get_framedata(self)
```

- Last but no least, this method runs the two methods described above and returns the dictionary with all the information needed.