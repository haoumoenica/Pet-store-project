import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproducts';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ProductDetailsComponent implements OnInit {

  id: number = 0;
  product: IProduct = {} as IProduct;
  products: IProduct[] = products;

  alertVisible: boolean = false;
  alertMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['index'];
    this.product = this.products[this.id];
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    console.log(this.cartService.getCart());

    // Show the alert
    this.alertMessage = `${this.product.name} has been added to your cart.`;
    this.alertVisible = true;

    // Hide the alert after 3 seconds
    setTimeout(() => {
      this.alertVisible = false;
    }, 3000);
  }

  closeAlert(): void {
    this.alertVisible = false;
  }
}
