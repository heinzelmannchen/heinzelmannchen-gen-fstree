var Q = require('q'),
	fs = require('fs'),
	_ = require('underscore'),
	path = require('path'),
    Parent = require('heinzelmannchen-generator'),
    Generator = Parent.inherit();

Generator.prototype.createData = function() {
	var q = Q.defer(),
		config = this.config;
	
	config.path = config.path || '.';

    Q.nfcall(fs.readdir, config.path)
		.then(function (files) {
			files = _.map(files, function(file) { return path.join(config.path, file); });
			q.resolve({data: { files: files }});
		})
		.fail(function (error) {
			q.reject(error);
		});

	return q.promise;
};

Generator.explain = function() {
    return '{ files: [\'file1.txt\', \'file2.jpg\', \'file3.js\', ...]}';
};

Generator.help = function() { };

module.exports = Generator;
