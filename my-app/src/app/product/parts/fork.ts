import { Product } from '../product'

export class Fork implements Product {
    id: number;
    title: string;
    price: number;

    constructor(id:number, title:string, price:number) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

 
}