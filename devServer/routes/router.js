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

router.get('/library', (req, res, next) => {
	res.render('library', { data: data.library });
});

router.get('/record_week1', (req, res, next) => {
	res.render('record_week1', { data: data.paper01 });
});

router.get('/record_week4', (req, res, next) => {
	res.render('record_week4', { data: data.paper04 });
});

router.get('/record_week7', (req, res, next) => {
	res.render('record_week7', { data: data.paper07 });
});

router.get('/record_week8', (req, res, next) => {
	res.render('record_week8', { data: data.paper08 });
});

module.exports = router;
