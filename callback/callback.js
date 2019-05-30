
//Part 1
//operate on 1 to n numbers based on the callback function
const calc = function(n, callback);

//1 + 2 + 3 = 6
let addAll = calc(3, function(a,b){
  return a + b;
}); 

//1 * 2 * 3 * 4 = 24
let multAll = calc(4, function(a,b){
  return a * b;
}); 

//1 - 2 - 3 - 4 = -8
let minusAll = calc(4, function(a,b){
  return a - b;
}); 

//Part 2
//operate on an array of numbers based on the callback function

const nums = [1,2,3];

const calc1 = function(callback, ...nums)

//1 + 2 + 3 = 6
let addAll = calc(function(a,b){
  return a + b;
}, ...nums); 

//1 * 2 * 3 = 6
let multAll =  calc(function(a,b){
  return a * b;
}, ...nums); 

// https://codepen.io/codepatel/pen/WmJzjj