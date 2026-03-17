'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2026 - birthYear);
  console.log(this);
};
calcAge(2007);

const calcAgeArrow = birthYear => {
  console.log(2026 - birthYear);
  console.log(this);
};
calcAgeArrow(2006);

const lemayian = {
  year: 2007,
  calcAge: function () {
    console.log(this);
    console.log(2026 - this.year);
  },
};
lemayian.calcAge();

const thorfinn = {
  year: 2006,
};

thorfinn.calcAge = lemayian.calcAge;
// the this keyword always points to the object calling the method
thorfinn.calcAge();

const askeladd = {
  firstName: 'Artorius',
  year: 1402,
  calcAge: function () {
    console.log(this);
    console.log(2026 - this.year);
  },
  // returns 'Hey undefined' -> arrow functions don't get the this keyword
  greet: () => console.log(`Hey ${this.firstName}`),
  // returns 'Hey Artorius'
  greetAgain: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
askeladd.greet();
askeladd.greetAgain();
