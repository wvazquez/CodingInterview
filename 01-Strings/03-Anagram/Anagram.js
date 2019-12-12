function anagram(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let freq1 = {};
  let freq2 = {};
  //O(N)
  for(let i = 0; i<str1.length;i++){
    freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
    freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
  }
  //O(N)
  for(let letter in freq1){
    if(freq1[letter]!== freq2[letter]){
      return false;
    }
  }
  return true;
}

console.log(anagram("aAz", "aza"));
console.log(anagram("rat", "tar"));
console.log(anagram("", ""));
console.log(anagram("map", "Mat"));