"use strict";

/**
 * Created by bad4iz on 17.12.2016.
 */

/**
 * Решето Эратосфена
 *
 */

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
// шаг 1
arr = [];

for (var i = 2; i < 100; i++) {
    arr[i] = true;
}

// шаг 2
var p = 2;

do {
    // шаг 3
    for (i = 2 * p; i < 100; i += p) {
        arr[i] = false;
    }

    // шаг 4
    for (i = p + 1; i < 100; i++) {
        if (arr[i]) break;
    }

    p = i;
} while (p * p < 100); // шаг 5

// шаг 6 (готово)
// посчитать сумму
var sum = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
        sum += i;
    }
}

alert(sum);

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
        for (var _i = 0; _i < arr.length; _i++) {
            if (arr[_i] === b) {
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