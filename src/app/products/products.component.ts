import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  nameOfproducts = ' ';
  listProducts = [
    { id: 1, title: 't-shirt', price: 150, quantity: 0 ,like:0},
    { id: 2, title: 't-shirt', price: 180, quantity: 10 ,like:0},
    { id: 3, title: 't-shirt', price: 190, quantity: 10 ,like:0},
  ];
  increaseLike(p: any) {
let index = this.listProducts.indexOf(p);
this.listProducts[index].like++; }
}
