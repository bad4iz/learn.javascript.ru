"use strict";

/**
 * Created by bad4iz on 18.12.2016.
 */

describe("Решето Эратосфена", function () {

    it("returns the filtered values", function () {

        var arr = [];
        for (var i = 0; i < 120; i++) {
            arr[i] = i + 1;
        }

        var filtered = erafon(arr);

        assert.deepEqual(filtered, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113]);
    });
});

describe("Фильтр диапазона", function () {

    it("returns the filtered values", function () {

        var arr = [5, 3, 8, 1];

        var filtered = filterRange(arr, 1, 4);

        assert.deepEqual(filtered, [3, 1]);
    });

    it("doesn't change the array", function () {

        var arr = [5, 3, 8, 1];

        var filtered = filterRange(arr, 1, 4);

        assert.deepEqual(arr, [5, 3, 8, 1]);
    });
});

describe("проверка свойств массива", function () {
    function ara() {
        var _loop = function _loop(i) {
            var b = 60;
            var a = getRand(1, b);
            it("номер " + i + " " + a + "<" + b, function () {
                assert.equal(eq(a, b), -1);
            });
        };

        for (var i = 0; i < 1000; i++) {
            _loop(i);
        }
    }

    var ar = ["test", 2, 1.5, false];

    describe("поиск в массиве", function () {
        it("поиск find(arr, test)", function () {
            assert.equal(find(ar, "test"), 0);
        });
        it("поиск find(arr, 2)", function () {
            assert.equal(find(ar, 2), 1);
        });
        it("поиск find(arr, 1,5)", function () {
            assert.equal(find(ar, 1.5), 2);
        });
        it("поиск find(arr, 0)", function () {
            assert.equal(find(ar, 0), -1);
        });
    });

    // describe("проверка на включение выборки в диапазон ", ara);


    var arr = [];
    var arr2 = [];
    var n = Math.random() * 100;
    for (var i = 0; i < n; i++) {
        arr[i] = Math.random() + 100;
    }

    describe("передаем обьект", function () {
        it("массив с " + arr.length + " элементами. последний " + arr[arr.length - 1], function () {
            assert.equal(endArr(arr), arr[arr.length - 1]);
        });
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
    });
});