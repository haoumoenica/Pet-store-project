import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproducts';
import { products } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  product: IProduct = {} as IProduct;
  products: IProduct [] = products;
  id: number = 0;

  constructor(
    private CartService: CartService,

  ){}

  addToCart(index: number): any{
    let selectedProduct = this.products[index];
    this.CartService.addToCart(selectedProduct);
    console.log(this.CartService.getCart());
  }

  // addToCart(index: number){
  //   this.CartService.addToCart(this.product);
  //   console.log(this.CartService.getCart([index]));
  // }

}
 
 