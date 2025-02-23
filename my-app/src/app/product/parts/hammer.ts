import { NgModule } from '@angular/core';
import { Product } from '../product'

@NgModule
export class Hammer implements Product {
    id: number;
    title: string;
    price: number;

    constructor(id:number, title:string, price:number) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

 
}