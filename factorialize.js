function factorialize(num) {
  var numArr = [];
  if (num === 0){
    return 1;
  }
  for (var i=1; i<=num; i++){
    numArr.push(i);
  }
  num = numArr.reduce( function(previousVal, currentVal){
     return currentVal*previousVal;
  });
  return num;
}

factorialize(5);
