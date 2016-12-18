"use strict";

/**
 * Created by bad4iz on 18.12.2016.
 */
describe("проверка свойств массива", function () {
    var arr = [];
    var n = Math.random() * 100;
    for (var i = 0; i < n; i++) {
        arr[i] = Math.random() + 100;
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
    describe("передаем обьект", function () {
        it("массив с " + arr.length + " элементами. последний " + arr[arr.length - 1], function () {
            assert.equal(pushArr(arr, 'Компьютер'), arr[arr.length - 1]);
        });
        // let noObj;
        // it("передаем несуществующий объект", () => {
        //     assert.equal(endArr(noObj), false);
        // });
    });
});