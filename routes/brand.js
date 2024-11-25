const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Brand Page");
    res.send("Brand Page");
});

module.exports = router;