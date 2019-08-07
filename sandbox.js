var arr = ['21','05','1989'];
// arr.sort(function(a,b){
//     return a + b;
// });
// console.log(arr)
for(var i = 0; i < arr.length; i++){
    arr[i]=Number(arr[i]);
}
arr.sort();
for(var i = 0; i < arr.length; i++){
    arr[i] = String(arr[i]);
}
console.log(arr)