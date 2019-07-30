function palindrome(str){
    var startHalf = [];// empty array to stored boolean condition each string element
    // check for string element and push boolean condition per string element to empty array  
    for (var i = 0; i < str.length/2; i++){
        if (str[i] === str[str.length-i-1]){
            startHalf.push(true);
            // console.log('str-i ' + str[i] + ' ' + true);
            // console.log('str lenght-i ' + str[str.length-i-1] + ' ' + true );
        }else{
            startHalf.push(false);
            // console.log('str-i ' + str[i] + ' ' + false);
            // console.log('str lenght-i ' + str[str.length-i-1] + ' ' + false );
        }
    }

    // check for boolean array, if there is a false condition then will return false
    var status; //variable to stored true or false condition
    for (var i = 0; i < startHalf.length; i++){
        if(startHalf[i] === true){
            status = true;
        }else{
            status = false;
            break; //break the loop if there is a false condition
        }
    }
    return status;
}

function angkaPalindrome(angka){
    for (var i = 0; i<1; i) {
        angka = angka + 1;
        angkaStr = String(angka);
        if (palindrome(angkaStr) === true){
            return angka;
        }
    }
}


console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001