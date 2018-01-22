interface IStorageEngine {
    
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;

}

class Scale<StorageEngine extends IStorageEngine> {

    Storage: StorageEngine;
    
    constructor(_store:StorageEngine) {
       this.Storage= _store;
    }

    getSumScale():number {
        let allWeight:number=0;
        let obj = this.Storage;
        for(let i=0;i<obj.getCount();i++){
            allWeight+=obj.getItem(i).getScale();
        }
        return allWeight;
    }

    getNameList():Array<string> {
        let nameList:Array<string>=[];
        let obj = this.Storage;
        for(let i=0;i<obj.getCount();i++){
            nameList.push(obj.getItem(i).getName());
        }
        return nameList;
    }
}

class ScalesStorageEngineArray implements IStorageEngine {

    items:Array<Product>;

    constructor() {
        this.items = [];
    }

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

    constructor() {
        let items = [];
        let serialItems = JSON.stringify(items);
        localStorage.setItem("items", serialItems);
    }
    
    addItem(item:Product):void {
        let items = JSON.parse(localStorage.getItem("items"));
        items.push(item);
        let serialItems = JSON.stringify(items);
        localStorage.setItem("items", serialItems);
    }

    getItem(index:number):Product {
        let items = JSON.parse(localStorage.getItem("items"));
<<<<<<< HEAD
        
=======
>>>>>>> ce2111f79bd473e4bf2d58ba6f5fcc8450a9a3b9
        let t:Product = new Product(items[index].weight,items[index].name); 
        return t;
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
let store1 = new ScalesStorageEngineArray();
let store2 = new ScalesStorageEngineLocalStorage();

let scale1=new Scale<ScalesStorageEngineArray>(store1);

let scale2=new Scale<ScalesStorageEngineLocalStorage>(store2);


let apple1:Apple=new Apple(2,"Яблоко 1");

let tomato1:Apple=new Tomato(0.4,"Помидор 1");

store1.addItem(apple1);
store1.addItem(tomato1);

console.log("Cуммарный вес добавленных элементов:",scale1.getSumScale());
console.log("Наименования добавленных элементов:",scale1.getNameList());


let apple2:Apple=new Apple(0.5,"Яблоко 2");
let apple3:Apple=new Apple(0.3,"Яблоко 3");

let tomato2:Apple=new Tomato(0.55,"Помидор 2");

store2.addItem(apple2);
store2.addItem(tomato2);
store2.addItem(apple3);


console.log("Cуммарный вес добавленных элементов:",scale2.getSumScale());
console.log("Наименования добавленных элементов:",scale2.getNameList());

