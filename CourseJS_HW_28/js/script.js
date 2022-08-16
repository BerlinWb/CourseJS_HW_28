"use strict";

let sum = (function () { 
  let result = 0; 
  return function(a) { 
    result += a; 
    return result; 
  } 
})();
sum(3);
sum(5);
console.log(sum(20));