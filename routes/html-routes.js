const router = require("express").Router();
const path = require("path");

// top of other routes

// defines the rounte that sends 'notes.html' as a response to the client
router.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});
// defines the route that sends "index.html" as a response to the client
router.get('*',  (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});





module.exports = router;