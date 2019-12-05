
function sameFrequency(num1, num2){
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1.length !== num2.length) return false;
  
    let num1freq = {};
    let num2freq = {};
  
    for(let i = 0; i < num1.length; i++){
      num1freq[num1[i]] = (num1freq[num1[i]] || 0) + 1;
      num2freq[num2[i]] = (num2freq[num2[i]] || 0) + 1;
    }
    for(let num in num1freq){
      if(num1freq[num] !== num2freq[num]) return false;
    }
    return true
}
  