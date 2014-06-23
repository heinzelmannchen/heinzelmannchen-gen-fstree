var Generator = require('..'),
	mockFs = require('mock-fs');

describe('Generator', function() {

	beforeEach(function() {
		mockFs({
			'foo': {
				'bar.tpl': 'hello Edi',
				'dummy': 'content',
				'test': 'test'
			},
			'bar': { }
		});
	});
	
	afterEach(function() {
		mockFs.restore();
	});
		
    it('should be a class', function() {
        Generator.should.be.an('function');
        Generator.inherit.should.be.a('function');
    });
	
	it('should return filenames', function(done) {
        var generator = new Generator();
		generator.setConfig({ path: 'foo' });
		generator.createData().should.eventually.eql(['bar.tpl', 'dummy', 'test']).notify(done);
    });
	
	it('shouldn\'t return filenames for an empty folder', function(done) {
        var generator = new Generator();
		generator.setConfig({ path: 'bar' });
		generator.createData().should.eventually.eql([]).notify(done);
    });
	
	it('should fail for a non existing path', function(done) {
        var generator = new Generator();
		generator.setConfig({ path: 'foobar' });
		generator.createData().should.be.rejected.notify(done);
	});

});
