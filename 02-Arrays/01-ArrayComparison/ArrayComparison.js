
console.log(arraycompare([1,4,8,7],[49,1,64,16]));

/**
 * Solution 1: 
 * 
 * Total RunTime: O(N(N+N)) = O(N^2 + N^2)  = O(N^2)
 * 
 */
function arraycompare(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    //for loop is O(N)
    for(let i = 0; i < arr1.length; i++){
        //indexOf() is O(N)
        let index = arr2.indexOf(arr1[i] ** 2);
        if(index !== -1){
            //splice() is O(N)
            arr2.splice(index,1);
        }else{
          return false;
        }
    }
    return true;
}


/**
 * Solution2:
 * 
 * Total RunTime: O(N + N) = O(N)
 */
console.log(arraycompare2([1,4,8,7,1,4],[16, 1, 49,1,64,16]));


function arraycompare2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let freq1 = {};
    let freq2 = {};
    //O(N)
    for(let i = 0; i < arr1.length; i++){
      freq1[arr1[i]] = (freq1[arr1[i]] || 0) + 1;
      freq2[arr2[i]] = (freq2[arr2[i]] || 0) + 1;
    }
    //O(N)
    for(const key in freq1){
      if(!(key**2 in freq2) || freq1[key] !== freq2[key**2]){
        return false;
      }
    }
    return true;
}
