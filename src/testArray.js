/**
 * Created by bad4iz on 18.12.2016.
 */



describe("camelize", function() {

    it("leaves an empty line as is", function() {
        assert.equal(camelize(""), "");
    });

    it("turns background-color into backgroundColor", function() {
        assert.equal(camelize("background-color"), "backgroundColor");
    });

    it("turns list-style-image into listStyleImage", function() {
        assert.equal(camelize("list-style-image"), "listStyleImage");
    });

    it("turns -webkit-transition into WebkitTransition", function() {
        assert.equal(camelize("-webkit-transition"), "WebkitTransition");
    });

});


describe("removeClass", function() {

    it("ничего не делает, если класса нет", function() {
        var obj = {
            className: 'open menu'
        };
        removeClass(obj, 'new');
        assert.deepEqual(obj, {
            className: 'open menu'
        });
    });

    it("не меняет пустое свойство", function() {
        var obj = {
            className: ''
        };
        removeClass(obj, 'new');
        assert.deepEqual(obj, {
            className: ""
        });
    });

    it("удаляет класс, не оставляя лишних пробелов", function() {
        var obj = {
            className: 'open menu'
        };
        removeClass(obj, 'open');
        assert.deepEqual(obj, {
            className: "menu"
        });
    });

    it("если класс один и он удалён, то результат - пустая строка", function() {
        var obj = {
            className: "menu"
        };
        removeClass(obj, 'menu');
        assert.deepEqual(obj, {
            className: ""
        });
    });

    it("удаляет класс из середины списка", function() {
        var obj = {
            className: "open menu now"
        };
        removeClass(obj, 'menu');
        assert.deepEqual(obj, {
            className: "open now"
        });
    });

    it("удаляет повторяющийся класс из середины списка", function() {
        var obj = {
            className: "open menu menu zero"
        };
        removeClass(obj, 'menu');
        assert.deepEqual(obj, {
            className: "open zero"
        });
    });

});


describe("addClass", function() {

    it("добавляет класс, которого нет", function() {
        var obj = {
            className: 'open menu'
        };
        addClass(obj, 'new');
        assert.deepEqual(obj, {
            className: 'open menu new'
        });
    });

    it("не добавляет класс, который уже есть", function() {
        var obj = {
            className: 'open menu'
        };
        addClass(obj, 'open');
        assert.deepEqual(obj, {
            className: 'open menu'
        });
    });

    it("не добавляет лишних пробелов, который уже есть", function() {
        var obj = {
            className: ''
        };
        addClass(obj, 'open');
        assert.deepEqual(obj, {
            className: 'open'
        });
    });

});

describe(" Сумма решета Эратосфена", function() {

    it("returns the filtered values", function() {

        let arr = [];
        for(let i = 0; i < 99; i++){
            arr[i] = i+2;
        }
        assert.equal(sumEratosfen(arr), 1060);
    });
});



describe("Решето Эратосфена", function() {

    it("returns the filtered values", function() {

        let arr = [];
        for(let i = 0; i < 99; i++){
            arr[i] = i+2;
        }

        let filtered = eratosfen(arr);

        assert.deepEqual(filtered, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    });
});




describe("Фильтр диапазона", function() {

    it("returns the filtered values", function() {

        let arr = [5, 3, 8, 1];

        let filtered = filterRange(arr, 1, 4);

        assert.deepEqual(filtered, [3, 1]);
    });

    it("doesn't change the array", function() {

        let arr = [5, 3, 8, 1];

        let filtered = filterRange(arr, 1, 4);

        assert.deepEqual(arr, [5,3,8,1]);
    });

});


describe("проверка свойств массива", () => {
    function ara() {
        for (let i = 0; i < 1000; i++) {
            let b = 60;
            let a = getRand(1, b);
            it("номер " + i + " " + a + "<" + b, () => {
                assert.equal(eq(a, b), -1);
            });
        }

    }


    let ar = ["test", 2, 1.5, false];


    describe("поиск в массиве", () => {
        it("поиск find(arr, test)", () => {
            assert.equal(find(ar, "test"), 0);
        });
        it("поиск find(arr, 2)", () => {
            assert.equal(find(ar, 2), 1);
        });
        it("поиск find(arr, 1,5)", () => {
            assert.equal(find(ar, 1.5), 2);
        });
        it("поиск find(arr, 0)", () => {
            assert.equal(find(ar, 0), -1);
        });

    });


   // describe("проверка на включение выборки в диапазон ", ara);


    let arr = [];
    let arr2 = [];
    let n = Math.random() * 100;
    for (let i = 0; i < n; i++) {
        arr[i] = Math.random() + 100;
    }


    describe("передаем обьект", () => {
        it("массив с " + arr.length + " элементами. последний " + arr[arr.length - 1], () => {
            assert.equal(endArr(arr), arr[arr.length - 1]);
        });
    });


    describe("проверка на добавление последнего элемента", () => {
        // пушим в arr, 'Компьютер'
        pushArr(arr, 'Компьютер');
        it("передаем в массив 'Компьютер'", () => {
            assert.equal(endArr(arr), 'Компьютер');
        });
        let elm = "kjhkhk";
        pushArr(arr2, elm);
        it("передаем в массив " + elm, () => {
            assert.equal(endArr(arr2), elm);
        });

    });
});