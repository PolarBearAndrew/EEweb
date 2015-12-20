var _ = require('lodash');

var data = {
	records : require('./records.js'),
	library : require('./library.js'),
	reading : require('./reading.js'),
	studentList : require('./studentList.js'),
};

data.reading = _.groupBy(data.reading, function(read){
	return read.key;
});

data.studentList = _.groupBy(data.studentList, function(read){
	return read.group;
});


module.exports = data;
