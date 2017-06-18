function findLongestWord(str) {
  
  var sentence = str.split(" ");
  var count = 0;
  for (var i=0; i<sentence.length;i++){
    if (sentence[i].length>count){
      count=sentence[i].length;
    }
  }
  
  return count;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

