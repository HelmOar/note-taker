//dependencies
const router = require("express").Router();
const saveData = require("../db/saveData");

//get request to display the notes.html page
router.get("/api/notes", async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        .res.json(dbJson);
});
       


//Post request 
router.post("api/notes", (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    fs.writeFileSync("./db/db.json", JSON.stringify(dbJson));
    res.json (dbJson)
    

});
  
//Delete request ......




module.exports = router;
