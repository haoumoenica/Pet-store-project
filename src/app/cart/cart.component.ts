import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproducts';
import { CartService } from '../service/cart.service';
import { products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  product: IProduct [] = [];
  cartItems: IProduct[];
  products: IProduct [] = products;
  total: number = 0;
  serviceTip: number = 0;
  discountedTotal: number = 0;

  constructor(private CartService: CartService){
    this.cartItems = this.CartService.cartItems;
    this.total = this.CartService.getTotal();
  }

  onIncreaseQtty(product: IProduct){
    this.CartService.increaseQtty(product);
    this.total = this.CartService.getTotal();
  }

  onDecreaseQtty(product: IProduct){
    this.CartService.decreaseQtty(product);
    this.cartItems = this.CartService.cartItems;
    this.total = this.CartService.getTotal();
  }

  onDelete(index: number){
    this.CartService.deleteItem(index)
    this.cartItems = this.CartService.cartItems;
    this.total = this.CartService.getTotal();
  }

  // getService(serviceTip: number){
  //   serviceTip = 0;
  //   this.total = this.CartService.getTotal();
  //   this.serviceTip = this.CartService.serviceTip(this.total);
  // }

  // finalTotal(){
  //   this.serviceTip = this.CartService.serviceTip(this.total);
  //   this.discountedTotal = this.CartService.discountedTotal(this.total)
  // }

  ngOnInit(): void {
    this.product = this.CartService.getCart();
    this.total = this.CartService.getTotal();
  }
} 
