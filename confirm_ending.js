function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var start = (str.length - 1) - target.length;
  var length = target.length;
  
  sub = str.substr(start+1,length);
  
  
  return sub;
}

confirmEnding("Bastian", "n");

