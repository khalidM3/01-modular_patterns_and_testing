'use strict';

const greeting = require('../lib/greet.js');
const expect = require('chai').expect;


describe('Greeting module', function() {
  describe('#hello', function(){
    it('should return hello khalid', function() {
      const result = greeting.hello('khalid');
      expect(result).to.equal('Hello, khalid!');
    });
  });
});
