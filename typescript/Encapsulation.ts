class Item{
    private itemName!: string; // typescript has strict property initialization check
    private itemPrice!: number; // definite assignment assertion operator (!) ===> tell the typescript that you will defintely assign a vlaue

    constructor(name: string, price: number){
        this.setItemName(name);
        this.setItemPrice(price);
    }

    public getItemName():string{
        return this.itemName;
    }

    public setItemName(name: string){
        this.itemName = name;
    }

    public getItemPrice():number{
        return this.itemPrice;
    }

    public setItemPrice(price: number){
        if(price < 0){
            throw new Error("Price cannot be negative");
        }
        this.itemPrice = price;
    }

}


let item1: Item = new Item("Pen", 2);

//console.log(item1.itemName);
//console.log(item1.itemPrice);

console.log(item1.getItemName());
console.log(item1.getItemPrice());

item1.setItemPrice(-10);

console.log(item1);