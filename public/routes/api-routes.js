//dependencies
const router = require("express").Router();
const saveData = require("../db/saveData");

//get request to display the notes.html page
router.get("/notes", function (req, res) {
    saveData
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

//Post request 
router.post("/notes", function (req, res) {
    saveData
        .addNotes(req.body)
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});
  
//Delete request ......




module.exports = router;
