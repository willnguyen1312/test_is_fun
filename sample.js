// @ts-nocheck
/* eslint-disable */

// import R from 'ramda';

const R = require('ramda');



export const getEmail = R.map(R.prop("email"));

export const filterAdmin = R.filter(R.propEq("role", "admin"));

export const getAdminEmails = R.pipe(filterAdmin, getEmail);

// const M = require('ramda-fantasy').Maybe;
// const linearScale = (domainMin,domainMax) =>
//                       (rangeMin,rangeMax) =>
//                         (n) => 
//                           rangeMin + (n - domainMin) * (rangeMax - rangeMin) / (domainMax - domainMin)

// const initialScaleData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];
// // let linearScale = linearScale([0,1000]);
// let converter = linearScale(0, 1000)(0,100);

// console.log(R.map(converter(2),initialScaleData))

// const Just    = M.Just;
// const Nothing = M.Nothing;

// const safeDiv = R.curry((n, d) => d === 0 ? Nothing() : Just(n / d));
// const lookup = R.curry((k, obj) => k in obj ? Just(obj[k]) : Nothing());

// // getOrElse :: Maybe a ~> a -> a -- provide a default value if Nothing
// lookup('foo', { foo: 'bar' }).getOrElse('baz'); // 'bar'
// lookup('foo', { abc: 'bar' }).getOrElse('baz'); // 'baz'

// // maybe :: b -> (a -> b) -> Maybe a -> b -- transform the value if it exists
// //                                        -- with the provided function,
// //                                        -- otherwise return the default value
// plus1or0 = M.maybe(0, R.inc);
// console.log(plus1or0(safeDiv(42, 2)));; // 22
// console.log(plus1or0(safeDiv(42, 0)));; // 0


//=> 'ghijklm'
// var fn = R.cond([
//   [R.view(R.lensProp('c')),   R.always('3')],
//   [R.equals(100), R.always('water boils at 100°C')],
//   [R.T,           temp => 'nothing special happens at ' + temp + '°C']
// ]);
// console.log(fn({
//   a: 1,
//   b: null
// }));



// var abby = {name: 'Abby', age: 7, hair: 'blond'};
// var fred = {name: 'Fred', age: 12, hair: 'brown'};
// var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
// var alois = {name: 'Alois', age: 15, disposition: 'surly'};
// var kids = [abby, fred, rusty, alois];
// var hasBrownHair = R.propEq('hair', 'blond');
// console.log(R.filter(hasBrownHair, kids)); //=> [fred, rusty]





// total =[1,2,3,4] => [2,3,4]

// display(total) [1..4] => [2..4]

// head(total) => 1