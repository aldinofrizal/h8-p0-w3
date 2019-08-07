
function pasanganTerbesar(num) {
    // you can only write your code here!
    var value = []; //empty array to hold each number data
    numStr = String(num); //string of number data
    
    for (var i = 0; i < numStr.length-1; i++){
        value.push(Number(numStr.substr(i,2))); //push each number to array
    }
    var maxValue = 0; //comparator to each array element
    for (var i = 0; i < value.length; i++){
        if (maxValue <= value[i]){
            maxValue = value[i];
        }else{
            maxValue = maxValue;
        }
    }
    return maxValue;        
} 
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  console.log(pasanganTerbesar(2000000030000000));