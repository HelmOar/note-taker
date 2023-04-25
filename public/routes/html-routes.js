const router = require("express").Router();
const path = require("path");

// top of other routes
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/",  (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// if no matching route is found default to home
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;