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
    var message = document.getElementById('message');
    message.innerHTML += mess + '<br/>';
    console.log(mess);
}

window.onload = foo;
function pushArr(arr, elm) {
    if (arr.push(elm)) return true;
    return false;
}

function endArr(arr) {
    if (!arr.length) return false;
    return arr[arr.length - 1];
}