var Scale = /** @class */ (function () {
    function Scale() {
        this.itemsScale = [];
    }
    Scale.prototype.add = function (_product) {
        this.itemsScale = this.itemsScale.concat([_product]);
    };
    Scale.prototype.getSumScale = function () {
        var allWeight = 0;
        this.itemsScale.forEach(function (v) { return allWeight += v.getScale(); });
        return allWeight;
    };
    Scale.prototype.getNameList = function () {
        var nameList = [];
        this.itemsScale.forEach(function (v) { return nameList = nameList.concat([v.getName()]); });
        return nameList;
    };
    return Scale;
}());
var Apple = /** @class */ (function () {
    function Apple(_weight, _name) {
        this.weight = _weight;
        this.name = _name;
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_weight, _name) {
        this.weight = _weight;
        this.name = _name;
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
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