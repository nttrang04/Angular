import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ProductAddComponent } from './pages/admin/products/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/products/product-edit/product-edit.component';
import { SignupComponent } from './pages/admin/products/signup/signup.component';
import { SigninComponent } from './pages/admin/products/signin/signin.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/:id/edit', component: ProductEditComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];
