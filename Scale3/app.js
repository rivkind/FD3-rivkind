var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scale = /** @class */ (function () {
    function Scale(_store) {
        this.Storage = _store;
    }
    Scale.prototype.getSumScale = function () {
        var allWeight = 0;
        var obj = this.Storage;
        for (var i = 0; i < obj.getCount(); i++) {
            allWeight += obj.getItem(i).getScale();
        }
        return allWeight;
    };
    Scale.prototype.getNameList = function () {
        var nameList = [];
        var obj = this.Storage;
        for (var i = 0; i < obj.getCount(); i++) {
            nameList.push(obj.getItem(i).getName());
        }
        return nameList;
    };
    return Scale;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        var items = [];
        var serialItems = JSON.stringify(items);
        localStorage.setItem("items", serialItems);
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var items = JSON.parse(localStorage.getItem("items"));
        items.push(item);
        var serialItems = JSON.stringify(items);
        localStorage.setItem("items", serialItems);
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var items = JSON.parse(localStorage.getItem("items"));
        var t = new Product(items[index].weight, items[index].name);
        return t;
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var items = JSON.parse(localStorage.getItem("items"));
        return items.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(_weight, _name) {
        this.weight = _weight;
        this.name = _name;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_weight, _name) {
        return _super.call(this, _weight, _name) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_weight, _name) {
        return _super.call(this, _weight, _name) || this;
    }
    return Tomato;
}(Product));
var store1 = new ScalesStorageEngineArray();
var store2 = new ScalesStorageEngineLocalStorage();
var scale1 = new Scale(store1);
var scale2 = new Scale(store2);
var apple1 = new Apple(2, "Яблоко 1");
var tomato1 = new Tomato(0.4, "Помидор 1");
store1.addItem(apple1);
store1.addItem(tomato1);
console.log("Cуммарный вес добавленных элементов:", scale1.getSumScale());
console.log("Наименования добавленных элементов:", scale1.getNameList());
var apple2 = new Apple(0.5, "Яблоко 2");
var apple3 = new Apple(0.3, "Яблоко 3");
var tomato2 = new Tomato(0.55, "Помидор 2");
store2.addItem(apple2);
store2.addItem(tomato2);
store2.addItem(apple3);
console.log("Cуммарный вес добавленных элементов:", scale2.getSumScale());
console.log("Наименования добавленных элементов:", scale2.getNameList());
//# sourceMappingURL=app.js.map