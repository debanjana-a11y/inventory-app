const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Category Page");
    res.send("Category Page");
});

module.exports = router;