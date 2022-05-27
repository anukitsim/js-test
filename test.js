

var colors = ["white", "black", "yellow", "red"];

for(var i=0; i<colors.length; i++){
    document.write(colors[i] + "</br>");
}

var numbers = [1,2,3,4,5,6]

for(var i = numbers.length-1; i>=0; i--){
    document.write(numbers[i] + "</br>");
}


function display (x, pricemessage){
    var message = pricemessage(x);
    document.write (message);
}

function pricemessage (price){
    if (price>50)
    return "expensive";
    else if (price>=20)
    return "avarage";
    else
    return "low price";
}
display (18, pricemessage);


var arr = [15,53,22,198,10,28,16,70,33,951];

var result = arr.filter ((n) => n%2-1 ==0)

document.write(result);



