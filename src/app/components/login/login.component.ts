import { Component } from '@angular/core';;
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = new User();
  erreur = 0;

  constructor(private authService: AuthService,
    private router: Router
  ) {
  }

  onLoggedin(){
    console.log(this.user);

  this.authService.SignIn(this.user).subscribe({
    next: response => {
      console.log('login successful', response);
      this.router.navigate(['/welcome']);
    },
    error: err => {
      console.error('login failed', err);
      this.erreur = 1;
    }
  });

  }

}
