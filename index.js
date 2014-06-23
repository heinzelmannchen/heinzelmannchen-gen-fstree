var Q = require('q'),
	fs = require('fs'),
    Parent = require('heinzelmannchen-generator'),
    Generator = Parent.inherit();

Generator.prototype.createData = function() {
	var q = Q.defer();

    Q.nfcall(fs.readdir, this.config.path)
		.then(function (files) {
			q.resolve(files);
		})
		.fail(function (error) {
			q.reject(error);
		});

	return q.promise;
};

Generator.explain = function() {
    return '[\'file1.txt\', \'file2.jpg\', \'file3.js\']';
};

Generator.help = function() { };

module.exports = Generator;