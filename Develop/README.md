# Note-Taker

This is an appliation designed as a remind to you of whats to come in our busy lives. 

## Motivation

Sometimes we forget or dont easely remember whats next on our agenda so this note taker can remind us of what we need to do.



## Screenshots

https://raw.githubusercontent.com/Jeremiah-81/Note-Taker/main/Develop/11-express-homework-demo-01.png

## Tech/Framework

JSON 

### How to Use


## Features

You can easely write, save and delete any note all from the same page with just one click.

### Credit

https://www.thiscodeworks.com/app-delete-how-to-use-delete-in-express-and-set-up-route-node/612ddb940032010015329851

## This README was generated with ❤️ by: 

<!--------------------------------- try this to delete the notes------------------------------ -->
<!-- 
app.delete("/api/notes/:id", function (req, res) {
    let jsonFilePath = path.join(__dirname, "/db/db.json");
    // request to delete note by id.
    for (let i = 0; i < database.length; i++) {

        if (database[i].id == req.params.id) {
            // Splice takes i position, and then deletes the 1 note.
            database.splice(i, 1);
            break;
        }
    }
    // Write the db.json file again.
    fs.writeFileSync(jsonFilePath, JSON.stringify(database), function (err) {

        if (err) {
            return console.log(err);
        } else {
            console.log("Your note was deleted!");
        }
    });
    res.json(database);
}); -->
