// @ts-nocheck
/* eslint-disable */

// import R from 'ramda';

import R from 'ramda';

import {data} from './data';



var getAdminEmails = function(users) {
  var emails = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].role === "admin") {
      emails.push(users[i].email);
    }
  }
  return emails;
};
// var getAdminEmailsFunctional1 = users =>
//   users
//     .filter(u => {
//       return u.role === "admin";
//     })
//     .map(u => {
//       return u.email;
//     });

// const getEmail = R.map(R.prop("email"));

// const filterAdmin = R.filter(R.propEq("role", "admin"));

// var transducer = R.pipe(R.map(R.prop('email')), R.filter(R.propEq("role", "admin")));

// const getAdminEmailsFunctional2 = R.compose(getEmail, filterAdmin);
// const getAdminEmailsFunctional3 = R.pipe(filterAdmin, getEmail);
// const getAdminEmailsFunctional4 =  R.transduce(transducer, R.flip(R.append), []); //=> [2, 3]


// console.log(getAdminEmailsFunctional4(data));