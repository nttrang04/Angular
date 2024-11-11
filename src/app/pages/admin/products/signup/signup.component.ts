import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm!: any;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onHandleSubmit() {
    console.log(this.signupForm.value);
    if (this.signupForm.invalid) return;

    this.authService.signup(this.signupForm.value).subscribe(() => {
      alert(`Đăng ký thành công`);
      this.router.navigateByUrl('/signin');
    });
  }
}
