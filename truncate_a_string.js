function truncateString(str, num) {
  // Clear out that junk in your trunk
  var truncated;
  if (str.length > num){
    if (num <= 3){
      truncated = str.slice(0,num) + "...";
    }
    else{
      truncated = str.slice(0,num-3) + "...";
    }
  }
  else
    truncated = str;
  return truncated;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
