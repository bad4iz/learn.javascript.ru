/**
 * Created by bad4iz on 18.12.2016.
 */
describe("проверка свойств массива", () => {
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

    function ara() {
        for (let i = 0; i < 1000; i++) {
            let b = 60;
            let a = getRand(1, b);
        it("номер " + i + " " + a + "<" + b, () => {
            assert.equal(eq(a, b), -1);
        });
        }

    }
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