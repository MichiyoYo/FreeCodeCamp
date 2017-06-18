function repeatStringNumTimes(str, num) {
  // repeat after me
  var daString = "";
  
  if (num <= 0)
    return "";
  
  while(num>0){
    daString += str;
    num --;
  }
  return daString;
}

repeatStringNumTimes("abc", 3);

