var express = require('express');
var router = express.Router();
const CircularStructureStringify = require('circular-structure-stringify');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const jsonStub = {test: 'test'};

  res.send({Text: CircularStructureStringify(jsonStub)});
});

module.exports = router;
