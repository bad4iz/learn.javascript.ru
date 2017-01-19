'use strict';

/**
 * Created by bad4iz on 17.12.2016.
 */

function revertSort(arr) {
    arr.sort(function (a, b) {
        return b - a;
    });
}

function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}

function removeClass(obj, elm) {
    var myStr = obj.className.split(' ');

    for (var i = 0; i < myStr.length; i++) {
        if (myStr[i] == elm) {
            myStr.splice(i, 1);
            i -= 1;
        }
    }
    return obj.className = myStr.join(" ").trim();
}

function camelize(str) {
    var o = void 0;
    var myStr = str ? str.split('-') : [];

    for (var i = 1; i < myStr.length; i++) {
        myStr[i] = myStr[i].slice(0, 1).toUpperCase() + myStr[i].slice(1);;
    }
    return myStr.join("");
}

function addClass(obj, elm) {
    var arr4 = [];
    var myObj = obj.className;
    arr4 = myObj.split(" ");
    if (arr4.indexOf(elm) < 0) {
        arr4.push(elm);
        obj.className = arr4.join(" ").trim();
    }
    return obj;
}

function sumEratosfen(arr) {
    var newArr = eratosfen(arr);
    var sum = 0;
    for (var i = 0; i < newArr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function eratosfen(arr) {
    var a = void 0,
        b = void 0;
    do {
        a = b = arr.shift();
        arr.push(a);
        do {
            if (b % a) {
                arr.push(b);
            }
            b = arr.shift();
        } while (b != a);

        // добавляяем удаленный b
        arr.push(a);
        // пока первый элемент больше последнего
    } while (arr[0] > arr[arr.length - 1]);
    return arr;
}

////////////////////////////////////////////////

// // шаг 1
// arr = [];
//
// for (var i = 2; i < 100; i++) {
//     arr[i] = true
// }
//
// // шаг 2
// let p = 2;
//
// do {
//     // шаг 3
//     for (i = 2 * p; i < 100; i += p) {
//         arr[i] = false;
//
//     }
//
//     // шаг 4
//     for (i = p + 1; i < 100; i++) {
//
//         if (arr[i]){
//             console.log(i);
//             break;
//         }
//     }
//
//     p = i;
// } while (p * p < 100); // шаг 5
//
// // шаг 6 (готово)
// // посчитать сумму
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//         sum += i;
//     }
// }
// console.log(sum);
/////////////////////////////////////////////////////////////


/* создание массива

 *
 * 1  Создайте массив styles с элементами «Джаз», «Блюз».
 * 2  Добавьте в конец значение «Рок-н-Ролл»
 * 3  Замените предпоследнее значение с конца на «Классика».
 Код замены предпоследнего значения должен работать для
 массивов любой длины.
 * 4 Удалите первое значение массива и выведите его alert.
 * 5 Добавьте в начало значения «Рэп» и «Регги».
 *
 */

/**
 * Фильтр диапазона
 *
 * var arr = [5, 4, 3, 8, 0];

 var filtered = filterRange(arr, 3, 5);
 // теперь filtered = [5, 4, 3]
 // arr не изменился
 */

var arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
    var newArr = [];
    if (a === b) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === b) {
                newArr.push(arr[i]);
            }
        }
    }
    if (a < b) {
        for (var _i = 0; _i < arr.length; _i++) {
            if (a <= arr[_i] && arr[_i] <= b) {
                newArr.push(arr[_i]);
            }
        }
    }
    if (a > b) {
        for (var _i2 = 0; _i2 < arr.length; _i2++) {
            if (b <= arr[_i2] && arr[_i2] <= a) {
                newArr.push(arr[_i2]);
            }
        }
    }
    return newArr;
}

/**
 * поиск в массиве
 */
function find(arr, value) {
    var fal = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== false) {
            if (arr[i] == value) {
                return i;
            }
        }
    }
    return fal;
}

/**
 * проверка на равенство числа
 * если больше то 1
 * меньше -1
 * равно 0
 */
function eq(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a == b) return 0;
}

/**
 * возвращает случайное число
 * в диапазоне
 * @param min минимальный
 * @param max  максимальный
 */
function getRand(min, max) {
    if (!max) {
        max = min;
        min = 0;
    }
    var randn = min + Math.floor(Math.random() * (max - min));
    return randn;
}

function foo() {
    var styles = ["Джаз", "Блюз"];
    var message = '';
    pushArr(styles, "Рок-н-Ролл");
    styles[styles.length - 2] = 'Классика';
    styles.shift();
    styles.unshift('Регги');
    styles.unshift('Рэп');
    for (var i = 0; i < styles.length; i++) {
        message += '' + styles[i] + ', ';
    }
    setMessage(message);
    setMessage("dsdfsdfs");
}
/**
 * добавление в конец массива новый элемент
 *  @param {сстрока} mess выводит строку в браузере и консоле
 */

function setMessage(mess) {
    var text = "";
    if (Array.isArray(mess)) {
        text = mess.join(' ,');
        console.log(text);
    } else {
        text = mess;
    }
    var message = document.getElementById('message');
    message.innerHTML += text + '<br/>';
    console.log(text);
}

function ggg() {
    setMessage(filterRange(arr, 3, 5));
}

window.onload = ggg;
// window.onload = foo;
function pushArr(arr, elm) {
    if (arr.push(elm)) return true;
    return false;
}

function endArr(arr) {
    if (!arr.length) return false;
    return arr[arr.length - 1];
}