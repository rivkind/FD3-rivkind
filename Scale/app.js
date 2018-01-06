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
        this.sumScale = 0;
        this.nameList = [];
    }
    Scale.prototype.add = function (_product) {
        this.sumScale = this.sumScale + _product.getScale();
        this.nameList = this.nameList.concat([_product.getName()]);
    };
    Scale.prototype.getSumScale = function () {
        console.log("Cуммарный вес добавленных элементов:" + this.sumScale);
    };
    Scale.prototype.getNameList = function () {
        console.log("Наименования добавленных элементов:" + this.nameList);
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
scale.getSumScale();
scale.getNameList();
var apple2 = new Apple(0.5, "Яблоко 2");
var apple3 = new Apple(0.3, "Яблоко 3");
var tomato2 = new Tomato(0.55, "Помидор 2");
scale.add(apple2);
scale.add(tomato2);
scale.add(apple3);
scale.getSumScale();
scale.getNameList();
//# sourceMappingURL=app.js.map