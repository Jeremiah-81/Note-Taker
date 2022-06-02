### Note

## Motivation



## Screenshots

https://raw.githubusercontent.com/Jeremiah-81/Note-Taker/main/Develop/11-express-homework-demo-01.png

## Tech/Framework



### How to Use


## Features



### Credit

https://www.thiscodeworks.com/app-delete-how-to-use-delete-in-express-and-set-up-route-node/612ddb940032010015329851



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
