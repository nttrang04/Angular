import { Component } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  signinForm!: any;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      username: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onHandleSubmit() {
    console.log(this.signinForm.value);
    if (this.signinForm.invalid) return;

    this.authService.signin(this.signinForm.value).subscribe((data) => {
      alert(`Đăng nhập thành công`);

      localStorage.setItem('user', JSON.stringify(data));
    });
  }
}
