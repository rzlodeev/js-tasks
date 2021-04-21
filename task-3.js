
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
//не працює, а чому?


function giveMeFive(obj) {
  let arr = [];
  for (let key in obj) {
    if (key.length === 5) {arr.push(key);}
    if (obj[key].length === 5) {arr.push(obj[key]);}
  }
  
}
