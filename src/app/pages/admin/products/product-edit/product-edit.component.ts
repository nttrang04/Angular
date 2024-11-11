import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  productForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: [0, Validators.required],
      in_stock: [true],
      description: [''],
      published: [true],
    });
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    console.log(id);
    this.productService.getProductById(id).subscribe((product) => {
      this.productForm.patchValue(product);
    });
  }

  onHandleSubmit() {
    if (this.productForm.invalid) return;
    const id = +this.activeRoute.snapshot.params['id'];
    console.log(this.productForm.value);

    this.productService
      .updateProduct({ ...this.productForm.value, id })
      .subscribe((product) => {
        console.log(product);
        this.router.navigateByUrl('/');
      });
  }
}
