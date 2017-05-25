/* eslint-disable */
const { concat } =  require('ramda');
const { add } =  require('lodash');
const M = require('ramda-fantasy').Maybe;
const T = require('ramda-fantasy').Tuple;
const Maybe = require('monet').Maybe;

console.log(Maybe.fromNull(3));
console.log(M.isNothing(M.toMaybe(3)));


console.log(concat('a', 'bc'));
console.log(add(3, 6))