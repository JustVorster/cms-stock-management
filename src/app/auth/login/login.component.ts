import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class LoginComponent {
  errorMessage = '';

  
  form = this.fb.group({
    username: ['', Validators.required],  
    password: ['', Validators.required]   
  });

  constructor(
    private fb: FormBuilder,  
    private auth: AuthService,  
    private router: Router  
  ) {}

  onSubmit() {
    if (this.form.invalid) return;  

    const { username, password } = this.form.value;

    this.auth.login(username!, password!).subscribe({
      next: () => this.router.navigate(['/stock-items']),  
      error: (err: { error: string; }) => this.errorMessage = err.error || 'Login failed'  
    });
  }
}