function multiplyNumeric(obj) {
    if (isEmpty(obj)) {
        return false;
    }
    for (var key in obj) {
        console.log(obj[key]);
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
        console.log("удвоенное " + obj[key]);
    }
    return obj;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n) && isFinite(n))
}


function maxObj(obj) {
    var max = 0;
    var name;
    if (isEmpty(obj)) {
        return "нет сотрудников";
    }
    for (var key in obj) {
        if (max < +obj[key]) {
            max = obj[key];
            name = key;
        }
    }
    return name;
}


function summObj(obj) {
    var menu = obj;
    var sum = 0;
    if (isEmpty(obj)) {
        return 0;
    }
    for (var key in obj) {
        sum += +obj[key];
    }
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
var a, b;
function hf() {
    a = prompt("введите число ", "");
    b = prompt("введите число ", "");
}
function sum(a, b) {
    return a + b;
}
function isEmpty(obj) {
    /* ваш код */
    if (!obj) return true;
    return false;

}