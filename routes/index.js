const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Home Page");
    res.send("Home Page");
});

module.exports = router;