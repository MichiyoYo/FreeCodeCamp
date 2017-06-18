function palindrome(str) {
  var itIs = true;
  var newStr=str.replace(/[^0-9a-z]/gi, '');
  str = newStr.toLowerCase();
  strArr = str.split("");
  
  var i=0;
  var j=strArr.length-1;
  while(itIs && (i<(strArr.length-1)/2) && j>(strArr.length-1)/2){
    if (strArr[i]!=strArr[j])
      itIs = false;
    i++;
    j--;
  }
  
  return itIs;
}



palindrome("race car");
