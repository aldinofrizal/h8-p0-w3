function sort(arr){
    for(var i = 0; i < arr.length-1; i++) 
        if(arr[i] > arr[i+1])arr.splice(i,2,arr[i+1],arr[i])
    for(var i = 0; i < arr.length-1; i++)
        if(arr[i] > arr[i+1])return sort(arr);
    return arr;
}
function getTotal(arr){
    var amount = 0;
    for(var i = arr.length-1; i > 0; i--)
        if(arr[i] === arr[i-1])amount++;
        else return [arr[arr.length-1],amount];
}

// console.log(sort([3,5,2,1,5,5,5,52,12,59,13,57,102,1,12]));
// console.log(sort(['dybala','pogba','ronaldo','messi','beckham','allison']));
// console.log(sort([10,8,3,7,200,98,1,4,5,2,1,1,89,66,53,71]));
// console.log(sort(['wolves','cat','ant','tiger','zebra','panda']));
console.log(getTotal(sort([3,5,102,102,55,25,12,13,57,102,82,102,99,190,1,3,4,102])));