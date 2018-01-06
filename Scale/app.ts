class Scale {

    sumScale:number;
    nameList:Array<string>;

    constructor() {
        this.sumScale = 0;
        this.nameList = [];
    }

    add(_product:Product):void {
        this.sumScale=this.sumScale+_product.getScale();
        this.nameList=[...this.nameList,_product.getName()];
    }

    getSumScale():void {
        console.log("Cуммарный вес добавленных элементов:"+this.sumScale);
    }

    getNameList():void {
        console.log("Наименования добавленных элементов:"+this.nameList);
    }
}

class Product {

    weight:number;
    name:string;

    constructor(_weight:number,_name:string) {
        this.weight=_weight;
        this.name=_name;
    }

    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;
    }
}

class Apple extends Product {

    constructor(_weight:number,_name:string) {
        super(_weight,_name); 
    }
}

class Tomato extends Product {
    
    constructor(_weight:number,_name:string) {
        super(_weight,_name); 
    }
}

let scale:Scale=new Scale();

let apple1:Apple=new Apple(2,"Яблоко 1");

let tomato1:Apple=new Tomato(0.4,"Помидор 1");

scale.add(apple1);
scale.add(tomato1);

scale.getSumScale();
scale.getNameList();

let apple2:Apple=new Apple(0.5,"Яблоко 2");
let apple3:Apple=new Apple(0.3,"Яблоко 3");

let tomato2:Apple=new Tomato(0.55,"Помидор 2");

scale.add(apple2);
scale.add(tomato2);
scale.add(apple3);

scale.getSumScale();
scale.getNameList();