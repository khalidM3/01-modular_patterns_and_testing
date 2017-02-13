'use strict';

const greeting = require('../lib/greet.js');
const assert = require('assert');
describe('Greeting module', function() {
  describe('#hello', function(){
    it('should return hello khalid', function() {
      const result = greeting.hello('khalid');
      assert.ok(result === 'Hello, khalid!', 'Not equal to Hello khalid!');
    });
  });
});
