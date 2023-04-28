//dependencies
const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


//get request to display the notes.html page
router.get("/api/notes", (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        res.json(dbNotes);
});
       


//Post request 
router.post("/api/notes", (req, res) => {
    const dbNotes =  JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newNote = req.body;
    newNote.id = uuidv4();
    dbNotes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(dbNotes , null, 4));
    res.json(dbNotes);

});
  
//Delete request ......
router.delete("/api/notes/:id", (req, res) => {
    const data = fs.readFileSync("./db/db.json", "utf8");
    const dbNotes = JSON.parse(data);
    const newNotes = dbNotes.filter((note) => note.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(newNotes, null, 4));
    res.json("Note has been deleted");
});



module.exports = router;
