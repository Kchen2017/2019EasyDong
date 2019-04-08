var express = require('express');
var router = express.Router();

router.all("/list", function(req, res, next){
    res.json({hh:11});
})

module.exports = router;