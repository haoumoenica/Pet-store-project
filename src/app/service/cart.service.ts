import { Injectable } from '@angular/core';
import { IProduct } from '../iproducts';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: IProduct[] = [];
  formData!: string;
  constructor() {}

  addToCart(product: IProduct){
    if(this.cartItems.includes(product)){
      product.qtty++;
    }else{
      this.cartItems.push(product);
    }
  }

  getCart(){
    return this.cartItems
  }

  increaseQtty(product:IProduct){
    product.qtty++;
  }

  decreaseQtty(product:IProduct){
   if(product.qtty > 1){
    product.qtty --;
   } else {
    this.cartItems = this.cartItems.filter(cartItems => product != cartItems)
   }
  }

  deleteItem(index: number){
    this.cartItems[index].qtty = 1;
    this.cartItems.splice(index, 1);
  }

  getTotal(): number{
    let total: number = 0;
    this.cartItems.forEach(product => total += product.price * product.qtty);
    return total;
  }

  // serviceTip(total: number): number{
  //   return total + total * 0.1;
  // }

  // discountedTotal(total: number): number{
  //   if(total > 40){
  //     return total *0.85;
  //   } else {
  //     return total;
  //   }
  // }
}
