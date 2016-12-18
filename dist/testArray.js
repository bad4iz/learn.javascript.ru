"use strict";

/**
 * Created by bad4iz on 18.12.2016.
 */
describe("проверка свойств массива", function () {
    function ara() {
        for (var _i = 0; _i < 1000; _i++) {
            var _b = 60;
            var _a = getRand(1, _b);
        }
        it("номер " + i + " " + a + "<" + b, function () {
            assert.equal(eq(a, b), -1);
        });
    }

    describe("проверка на включение выборки в диапазон ", ara);

    var arr = [];
    var arr2 = [];
    var n = Math.random() * 100;
    for (var _i2 = 0; _i2 < n; _i2++) {
        arr[_i2] = Math.random() + 100;
    }
    describe("передаем обьект", function () {
        it("массив с " + arr.length + " элементами. последний " + arr[arr.length - 1], function () {
            assert.equal(endArr(arr), arr[arr.length - 1]);
        });
        // let noObj;
        // it("передаем несуществующий объект", () => {
        //     assert.equal(endArr(noObj), false);
        // });
    });
    describe("проверка на добавление последнего элемента", function () {
        // пушим в arr, 'Компьютер'
        pushArr(arr, 'Компьютер');
        it("передаем в массив 'Компьютер'", function () {
            assert.equal(endArr(arr), 'Компьютер');
        });
        var elm = "kjhkhk";
        pushArr(arr2, elm);
        it("передаем в массив " + elm, function () {
            assert.equal(endArr(arr2), elm);
        });
        // let noObj;
        // it("передаем несуществующий объект", () => {
        //     assert.equal(endArr(noObj), false);
        // });
    });
});