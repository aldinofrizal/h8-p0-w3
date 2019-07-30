function targetTerdekat(arr) {
    // you can only write your code here!
    var x = []; //declare empty array to stored 'x' element index
    var o = []; //declare empty array to stored 'o' element index
    
    //push o index and x index to array
    for(var i =0; i < arr.length; i++){
        if (arr[i] === 'o'){
            o.push(Number(i));
        }else if (arr[i] === 'x'){
            x.push(Number(i));
        }else{
            continue;
        }
    }

    //return value 0 if there is no x or no o in array
    if(o.length === 0 || x.length === 0){
        return 0;
    }

    //push absolute defisit for each x and o elements
    var defisit = [];
    for(var i =0; i < x.length; i++){
        for(var j=0; j < o.length; j++){
            defisit.push(Math.abs((x[i] - o[j])));
        }
    }
    // ascending sort to defisit array, and call the first element to get the smallest value of defisit
    // smallest value in defisit array is smallest gap between x and o on input array
    return defisit.sort()[0];
}
  
  // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2