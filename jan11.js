'use strict';

//O(1)
function oOne (num1, num2, num3){
  return num1 + num2 + num3;
}

//O(n)
function oN (array){
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//O(n^2)
function oNsq (arrOne, arrTwo){
  var obj = {};
  for (var i = 0; i < arrOne.length; i++) {
    obj.arrOne[i] = [];

    for (var j = 0; j < arrTwo.length; j++) {
      obj.arrOne[i].push(arrTwo[j]);
    }
  }
}
