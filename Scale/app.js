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
    function Scale() {
        this.itemsScale = [];
    }
    Scale.prototype.add = function (_product) {
        this.itemsScale = this.itemsScale.concat([_product]);
    };
    Scale.prototype.getSumScale = function () {
        var allWeight = 0;
        this.itemsScale.forEach(function (v) { return allWeight += v.weight; });
        return allWeight;
    };
    Scale.prototype.getNameList = function () {
        var nameList = [];
        this.itemsScale.forEach(function (v) { return nameList = nameList.concat([v.name]); });
        return nameList;
    };
    return Scale;
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
var scale = new Scale();
var apple1 = new Apple(2, "Яблоко 1");
var tomato1 = new Tomato(0.4, "Помидор 1");
scale.add(apple1);
scale.add(tomato1);
console.log("Cуммарный вес добавленных элементов:", scale.getSumScale());
console.log("Наименования добавленных элементов:", scale.getNameList());
var apple2 = new Apple(0.5, "Яблоко 2");
var apple3 = new Apple(0.3, "Яблоко 3");
var tomato2 = new Tomato(0.55, "Помидор 2");
scale.add(apple2);
scale.add(tomato2);
scale.add(apple3);
console.log("Cуммарный вес добавленных элементов:", scale.getSumScale());
console.log("Наименования добавленных элементов:", scale.getNameList());
//# sourceMappingURL=app.js.map