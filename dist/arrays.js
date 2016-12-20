"use strict";

/**
 * Created by bad4iz on 17.12.2016.
 */

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
//
// window.onload = ()=>{
// };
//


/**
 * Решето Эратосфена
 *
 */
function erafon(arr) {
    var num = 1;

    for (; mum < arr.length; num++) {
        if (arr[i] % mun) {
            arr.splice(num, 1);
            console.log(arr[i]);
        }
    }

    return arr;
}

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
    if (a == b) {
        for (var _i = 0; _i < arr.length; _i++) {
            if (arr[_i] == b) {
                newArr.push(arr[_i]);
            }
        }
    }
    if (a < b) {
        for (var _i2 = 0; _i2 < arr.length; _i2++) {
            if (a <= arr[_i2] && arr[_i2] <= b) {
                newArr.push(arr[_i2]);
            }
        }
    }
    if (a > b) {
        for (var _i3 = 0; _i3 < arr.length; _i3++) {
            if (b <= arr[_i3] && arr[_i3] <= a) {
                newArr.push(arr[_i3]);
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
    for (var _i4 = 0; _i4 < arr.length; _i4++) {
        if (arr[_i4] !== false) {
            if (arr[_i4] == value) {
                return _i4;
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
    for (var _i5 = 0; _i5 < styles.length; _i5++) {
        message += '' + styles[_i5] + ', ';
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