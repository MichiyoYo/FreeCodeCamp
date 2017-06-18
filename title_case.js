function titleCase(str) {
  var words=str.split(" ");
  for (var i=0;i<words.length;i++){
    words[i]=words[i].toLowerCase();
    words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
  }
  
  str = words.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
