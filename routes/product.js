const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Product Page");
    res.send("Product Page");
});

module.exports = router;