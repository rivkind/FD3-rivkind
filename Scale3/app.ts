interface IStorageEngine {
    
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;

}

class Scale<StorageEngine extends IStorageEngine> {

    itemsScale: Product[];

    constructor() {
        this.itemsScale=[];
    }

    
    add(_product:Product):void {
        this.itemsScale=[...this.itemsScale,_product]; 
    }

    getSumScale():number {
        let allWeight:number=0;
        this.itemsScale.forEach( v=> allWeight+=v.getScale() )
        return allWeight;
    }

    getNameList():Array<string> {
        let nameList:Array<string>=[];
        this.itemsScale.forEach( v=> nameList=[...nameList,v.getName()] )
        return nameList;
    }
}

class ScalesStorageEngineArray implements IStorageEngine {

    items:Array<Product>;

    addItem(item:Product):void {
        this.items.push(item);
    }

    getItem(index:number):Product {
        return this.items[index];
    }
    

    getCount():number {
        return this.items.length;
    }
    
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    
    addItem(item:Product):void {
        let items = JSON.parse(localStorage.getItem("items"));
        items.push(item);
        let serialItems = JSON.stringify(items);
        localStorage.setItem("items", serialItems);
    }

    getItem(index:number):Product {
        let items = JSON.parse(localStorage.getItem("items"));
        return items[index];
    }
    

    getCount():number {
        let items = JSON.parse(localStorage.getItem("items"));
        return items.length;
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

let scale1=new Scale<ScalesStorageEngineArray>();

let scale2=new Scale<ScalesStorageEngineLocalStorage>();


let apple1:Apple=new Apple(2,"Яблоко 1");

let tomato1:Apple=new Tomato(0.4,"Помидор 1");

scale1.add(apple1);
scale1.add(tomato1);

console.log("Cуммарный вес добавленных элементов:",scale1.getSumScale());
console.log("Наименования добавленных элементов:",scale1.getNameList());


let apple2:Apple=new Apple(0.5,"Яблоко 2");
let apple3:Apple=new Apple(0.3,"Яблоко 3");

let tomato2:Apple=new Tomato(0.55,"Помидор 2");

scale2.add(apple2);
scale2.add(tomato2);
scale2.add(apple3);


console.log("Cуммарный вес добавленных элементов:",scale2.getSumScale());
console.log("Наименования добавленных элементов:",scale2.getNameList());

