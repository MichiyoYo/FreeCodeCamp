function reverseString(str) {
  var chars = str.split('');
  str = chars.join(chars.reverse());
  
  return str;
}

reverseString("hello");


