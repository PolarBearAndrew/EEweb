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

router.get('/record_week5', (req, res, next) => {
	res.render('record_week5', { data: data.paper05 });
});

router.get('/record_week7', (req, res, next) => {
	res.render('record_week7', { data: data.paper07 });
});

router.get('/record_week8', (req, res, next) => {
	res.render('record_week8', { data: data.paper08 });
});

router.get('/record_week9', (req, res, next) => {
	console.log('!!!', data.picture08);
	res.render('record_week9', { data: data.picture08 });
});

router.get('/record_week11', (req, res, next) => {
	res.render('record_week11', { data: data.paper11 });
});

router.get('/record_week14', (req, res, next) => {
	res.render('record_week14', { data: data.paper14 });
});

module.exports = router;
