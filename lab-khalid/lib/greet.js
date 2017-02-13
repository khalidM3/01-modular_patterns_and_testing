'use strict';

module.exports = exports = {};

exports.hello = function(name) {
  if(arguments.length === 0) throw new Error('Name not received');
  return `Hello, ${name}!`;
}
