var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send('Lista de Productos');
});

router.post('/', function(req, res, next) {
  res.send('Lista de Productos');
});

module.exports = router;
