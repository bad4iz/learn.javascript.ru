function summObj(obj){
    var menг = obj; 
        var sum = 0;
    if(isEmpty(obj)) return 0;
    console.log("вафываыв");
    for (var key in obj) {
        sum += +obj[key];
        console.log("sdfasdfsdfsafdsdf");
        alert( "Ключ: " + key + " значение: " + menu[key] );
    }
    console.log("sum = " + sum);
    return sum;
}

function pow(x, n) {
    if (n < 0) return NaN;
    if (x == 0 && n == 0) return NaN;
    if (Math.round(n) != n) return NaN;
    var result = 1;
    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
var a,b; 
function hf(){
    a = prompt("введите число ","");
    b = prompt("введите число ","");
}
function sum(a, b){
    return a+b;
}
function isEmpty(obj) {
  /* ваш код */
    if (obj) return true;
    return false;
    
}