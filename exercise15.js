function groupAnimals(animals) {
    // you can only write your code here!
    // extract first letter in each word element
    var hurufAwal = [];
    for (var i = 0; i < animals.length; i++){
        hurufAwal.push(animals[i][0]);
    }
    hurufAwal.sort() //sort so the iteration in the next step will follow alphabetic rules
    
    // delete the same element
    for(var i = 0; i<hurufAwal.length; i++){
        if(hurufAwal[i] === hurufAwal[i+1]){
            hurufAwal.splice(i,1);
        }    
    }

    var temporaryArray = []; 
    var finalArray = [];
    for (var j = 0; j < hurufAwal.length; j++){
        for (var i = 0; i < animals.length; i++){
            if (hurufAwal[j] === animals[i][0]){
                temporaryArray.push(animals[i]);
            }
        }
        finalArray.push(temporaryArray);
        temporaryArray = [];
    }
    return finalArray;   
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]