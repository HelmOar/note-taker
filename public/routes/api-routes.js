//dependencies
const router = require("express").Router();
const saveData = require("../db/saveData");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

//get request to display the notes.html page
router.get("/api/notes", async (req, res) => {
    const dbNotes = await JSON.parse(fs.readFileSync("./db/db.ntoes", "utf8"));
        .res.json(dbNotes);
});
       


//Post request 
router.post("api/notes", (req, res) => {
    const dbNotes = await JSON.parse(fs.readFileSync("./db/db.notes", "utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    fs.writeFileSync("./db/db.json", JSON.stringify(dbJson));
    res.json (dbNotes)
    

});
  
//Delete request ......




module.exports = router;
