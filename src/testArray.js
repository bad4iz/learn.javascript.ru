/**
 * Created by bad4iz on 18.12.2016.
 */
describe("проверка свойств массива", () => {
    function ara() {
        for (let i = 0; i < 1000; i++) {
            let b = 60;
            let a = getRand(1, b);
        }
            it("номер " + i + " " + a + "<" + b, () => {
                assert.equal(eq(a, b), -1);
            });

    }

    describe("проверка на включение выборки в диапазон ", ara);



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
        // let noObj;
        // it("передаем несуществующий объект", () => {
        //     assert.equal(endArr(noObj), false);
        // });

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
        // let noObj;
        // it("передаем несуществующий объект", () => {
        //     assert.equal(endArr(noObj), false);
        // });

    });
});