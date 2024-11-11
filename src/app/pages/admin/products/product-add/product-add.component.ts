import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  productForm!: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}
  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: ['', Validators.required],
      price: [0, Validators.required],
      in_stock: [true],
      description: [''],
      published: [true],
    });
  }
  onHandleSubmit() {
    if (this.productForm.invalid) return;
    console.log(this.productForm.value);
    this.productService
      .addProduct(this.productForm.value)
      .subscribe((product) => {
        console.log(product);
        this.router.navigateByUrl(`/`);
      });
  }
}
