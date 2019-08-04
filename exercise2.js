//input "hello world!"
//output
//"!dlrow olleh"
function balikString (str){
    var strArr = [];
    for (var i = 0; i < str.length; i++){
        strArr.push(str[str.length-i-1]);
    }
    var output = strArr.join('');
    return output;
}

console.log(balikString("hello world!"));