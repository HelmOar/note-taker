//dependencies
const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


//get request to display the notes.html page
router.get("/api/notes", async (req, res) => {
    const dbNotes = await JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        res.json(dbNotes);
});
       


//Post request 
router.post("/api/notes", (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newNotes = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    fs.writeFileSync("./db/db.json", JSON.stringify(newNotes));
    res.json (dbNotes)
    

});
  
//Delete request ......




module.exports = router;
