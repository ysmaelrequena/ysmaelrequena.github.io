---
title: Storing The Data
description: Here's how the db that stores the data was created.
sidebar:
    order: 3
---

###                                        Storing the data
<br />

For the Database, I went with a SQL solution and the RDBMS I used was MySQL.

The database consists initially of a 'characters' table that contains every character and their ID in the system that will serve as our foreign key to
assign their respective moves to them. 

In the ```insert_data_db(move_t, table, character_id)``` function located in the 'character_table_creation' module, the tables for each type of move will be created when it runs for the first
character. In case the game gets updated, my preferred method of updating my database is dropping the tables in MySQL through a series of predetermined queries already stored in the 
'/MySQL_queries' directory of the project and running the ```main_data_insert_recursion(current_character_id, max_character_id)``` function located in the 'character_table_creation' module.

I created two modules called 'character_table_creation' and 'db_connection_generic', respectively.

- 'character_table_creation' contains three funtions:

```
character_class_definer(character_id)
```

This creates an instance of the 'Character' class described above, and separates the subdictionaries for every type of move for the insertion into the database in the next class.


```
insert_data_db(move_t, table, character_id)
```

This one connects to the database using the code imported from 'db_connection_generic' and loops through the dictionaries to insert everything in the database, after it finishes, it closes the
connection to the database.


```
main_data_insert_recursion(current_character_id, max_character_id)
```

This one, as its name indicates, is a recursive function that, once ran by the developer, it goes through all of the character IDs (defined in the database) and runs the function for each character
in their respective URL from the SuperComboWiki and finally, inserts everything into the different tables created for every type of move through our 'db_connection_generic'


-'db_connection_generic' contains two functions:

```
create_connection()
```

For this function to work, the developer should introduce the data where the parameters of their connection to their database and it'll let them create a conncetion to their database with MySQL, for example:

```
def create_connection():
    connection_params = {
        'host': 'here goes your connection instance',
        'user': 'here goes your username',
        'password': 'here goes your password',
        'database': 'fighting_game_api'
    }
```

Finally we have 

```
get_cursor(connection)
```

This will use the connection specified above to configure a cursor so the developer can execute the MySQL queries with Python.