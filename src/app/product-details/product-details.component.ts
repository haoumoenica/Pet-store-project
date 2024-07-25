import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproducts';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
 
  id: number = 0;
  product: IProduct = {} as IProduct;
  products: IProduct [] = products;
  

  constructor(
    private route: ActivatedRoute,
    private CartService: CartService
  ){
    const id = +this.route.snapshot.params['index'];
    this.product = this.products[id];
    // console.log(this.product);
  }

  addToCart(){
    this.CartService.addToCart(this.product);
    console.log(this.CartService.getCart());
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['index'];
    this.product = this.products[this.id];
  }
}
