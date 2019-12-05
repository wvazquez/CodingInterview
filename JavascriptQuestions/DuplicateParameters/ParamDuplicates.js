function paramDuplicates(){
    let uniqueparams = {};
    for(index in arguments){
      if(uniqueparams[arguments[index]]){
        return true;
      }else{
        uniqueparams[arguments[index]] = true;
      }
    }
    return false;
  }
  
  console.log(paramDuplicates(3,2,3));
  console.log(paramDuplicates("a","b","c","a"));