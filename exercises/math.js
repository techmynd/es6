const add = function(a, b) {
  return a + b;
};
const mult = function(a, b) {
  return a * b;
};

const calc = function(n = 1, cb) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  
  let total = 1;
  for ( let i=2; i<=n; i++){
    total = cb(total, i)
  }
  return total;
};

console.log(calc(100, add))


// https://codepen.io/codepatel/pen/EMLEbO?editors=1111