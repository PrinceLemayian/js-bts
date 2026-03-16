// Hoisting with variables

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Lemayian';
let job = 'Engineer';
const year = 2007;

// Hoisting with functions
console.log(addDec(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
