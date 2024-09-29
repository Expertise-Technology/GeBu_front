import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user = new User();
  message!: string;

  constructor(private authService: AuthService,
    private router: Router
  ) {
  }

  register(){
    console.log(this.user);

  this.authService.Register(this.user).subscribe({
    next: response => {

      console.log('register successful', response);
      this.router.navigate(['/login']);
    },
    error: err => {
      console.error('register failed', err);
      this.message = "le mail est deja utiliser !";
    }
  });

  }


}
