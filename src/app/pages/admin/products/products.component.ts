import { Component } from '@angular/core';
import { IProduct } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products!: IProduct[];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  removeItem(id: number) {
    const confirm = window.confirm('Ban co muon xoa?');
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter((product) => product.id !== id);
        alert('Xoa san pham thanh cong');
      });
    }
  }
}
