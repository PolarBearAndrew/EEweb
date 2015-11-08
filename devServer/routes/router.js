var express = require('express');
var router  = express.Router();

var request = require('request');
var list    = require('../../list.js');
var db      = require('../data/index.js');
var file    = require('../feature/fs.js');
var queryString = require('../feature/queryString.js');

var data = require('../data');

router.get('/record', (req, res, next) => {
	res.render('record', { data: data.records });
});

module.exports = router;
