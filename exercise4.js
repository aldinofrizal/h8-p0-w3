//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]



var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandler2(input){
    
    // output splice
    input.splice(4,1, "Pria" , "SMA Internasional Metro");
    input.splice(1,2, "Roman ALamsyah Elsharawy", "Provinsi Bandar Lampung");
    console.log(input);
    
    // output split
    var dateBirth = input[3].split("/");
    switch (dateBirth[1]){
        case "01":
            dateBirth[1] = "Januari";
            break;
        case "02":
            dateBirth[1] = "Februari";
            break;
        case "03":
            dateBirth[1] = "Maret";
            break;
        case "04":
            dateBirth[1] = "April";
            break;
        case "05":
            dateBirth[1] = "Mei";
            break;
        case "06":
            dateBirth[1] = "Juni";
            break;
        case "07":
            dateBirth[1] = "Juli";
            break;
        case "08":
            dateBirth[1] = "Agustus";
            break;
        case "09":
            dateBirth[1] = "September";
            break;
        case "10":
            dateBirth[1] = "Oktober";
            break;
        case "11":
            dateBirth[1] =  "November";
            break;
        case "12":
            dateBirth[1] = "Desember";
            break;
    }
    console.log(dateBirth[1]);

    //output sort
    var dateSort = input[3].split("/");
    dateSort.sort(function(value1, value2) { return value2-value1 });
    console.log(dateSort);

    //output join
    var dateJoin = input[3].split("/");
    console.log(dateJoin.join("-"));

    //output String
    var nameString = String(input[1]);
    console.log(nameString.substr(0,15));
}

dataHandler2(input);