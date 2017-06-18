function chunkArrayInGroups(arr, size) {
  // Break it up.
  var index = 0;
  var chunks = [];
  
  for (var i = 0; i < arr.length; i += size){
    chunks.push(arr.slice(index,size+i));
    index += size;
  }
  return chunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
