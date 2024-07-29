import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproducts';
import { products } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ProductListComponent implements OnInit {

  product: IProduct = {} as IProduct;
  products: IProduct[] = products;
  id: number = 0;

  alertVisible: boolean = false;
  alertMessage: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(index: number): void {
    let selectedProduct = this.products[index];
    this.cartService.addToCart(selectedProduct);
    console.log(this.cartService.getCart());

    // Show the alert
    this.alertMessage = `${selectedProduct.name} has been added to your cart.`;
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
