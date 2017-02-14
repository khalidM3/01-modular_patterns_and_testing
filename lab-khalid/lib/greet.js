'use strict';

module.exports = exports = {};

exports.hello = function(name) {
  if(arguments.length === 0) throw new Error('Name not received');
  console.log(name);
  return `Hello, ${name}!`;
};
