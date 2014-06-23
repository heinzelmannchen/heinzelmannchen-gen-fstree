var Generator = require('..'),
    chai = require('chai'),
    should = chai.Should();

describe('Generator', function() {
    it('should be a class', function() {
        Generator.should.be.an('function');
        Generator.inherit.should.be.a('function');
    });

    it('should be inheritable', function() {
        Generator.inherit().should.be.a('function');
    });

    it('should respond to the nessesary interface', function() {
        var generator = Generator.inherit();
        generator.should.respondTo('createData');
        generator.should.respondTo('setConfig');
        Generator.explain.should.be.a('Function');
        Generator.help.should.be.a('Function');
    });

    it('should be typof generator', function() {
        var MyGenerator = Generator.inherit(),
            generator = new MyGenerator();
        generator.should.be.an.instanceof(Generator);
    });
});
