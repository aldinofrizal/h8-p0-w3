//input "hello world!"
//output
//"!dlrow olleh"

var str = 'hello world!';
var strArr = [];
for (var i = 0; i < str.length; i++){
    strArr.push(str[str.length-i-1]);
}
var output = strArr.join('');
console.log(output);