var _ = require('lodash');

var data = {
	records : require('./records.js'),
	library : require('./library.js'),
	reading : require('./reading.js'),
};

data.reading = _.groupBy(data.reading, function(read){
	return read.key;
});

module.exports = data;
