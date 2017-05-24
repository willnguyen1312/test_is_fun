/* eslint-disable */
// @ts-nocheck

const Benchmark = require("benchmark");

const R = require("ramda");

const data = [
  {
    role: "admin",
    email: "admin1"
  },
  {
    role: "normal",
    email: "normal"
  },
  {
    role: "admin",
    email: "admin2"
  }
];

const transducer = R.pipe(R.map(R.prop('email')), R.filter(R.propEq("role", "admin")));

const transduce =  R.transduce(transducer, R.flip(R.append), []); //=> [2, 3]

const getEmail = R.map(R.prop("email"));
const filterAdmin = R.filter(R.propEq("role", "admin"));
const mapReduce = R.compose(getEmail, filterAdmin);

var suite = new Benchmark.Suite();

var normal = users =>
  users
    .filter(u => {
      return u.role === "admin";
    })
    .map(u => {
      return u.email;
    });

var getAdminEmailsImperative = function(users) {
  var emails = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].role === "admin") {
      emails.push(users[i].email);
    }
  }
  return emails;
};

// add tests
suite
  .add("MapReduce", function() {
    mapReduce(data)
  })
  .add("Transduce", function() {
    transduce(data)
  })
  .add("Normal", function() {
    normal(data)
  })
  .add("Imperative", function() {
    getAdminEmailsImperative(data)
  })
  // add listeners
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: true });
