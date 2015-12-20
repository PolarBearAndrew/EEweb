var _ = require('lodash');

var data = {
	freshwater : require('./freshwater.js'),
	library : require('./library.js'),
	paper01 : require('./paper01.js'),
	paper07 : require('./paper07.js'),
	reading : require('./reading.js'),
	reportGW : require('./reportGW.js'),
	schoolActivity : require('./schoolActivity.js'),
	studentList : require('./studentList.js'),
};

data.reading = _.groupBy(data.reading, function(read){
	return read.key;
});

data.studentList = data.studentList.map(function(stu){
	if(stu.group == 'unknow'){
		stu.group = '10';
	}
	return stu;
});

data.studentList = _.groupBy(data.studentList, function(read){
	return read.group;
});

var records = require('./records.js');
records = records.map(function(record){
	record.todo = record.todo
		// .replace(/:/, '：#')
		// .replace(/：/, '：#')
		.replace(/10\./g, '#10.')
		.replace(/1\./g, '#1.')
		.replace(/2\./g, '#2.')
		.replace(/3\./g, '#3.')
		.replace(/4\./g, '#4.')
		.replace(/5\./g, '#5.')
		.replace(/6\./g, '#6.')
		.replace(/7\./g, '#7.')
		.replace(/8\./g, '#8.')
		.replace(/9\./g, '#9.');
	record.todo = _.words(record.todo, /[^#]+/g);
	return record;
});


data.records = {
	'class' : records,
	'student' : data.studentList,
};



module.exports = data;
