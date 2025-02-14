import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule ,Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,FooterComponent,NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginMessage: string = '';
  constructor(private router: Router, private location: Location) { }

  onLogin(event: Event): void {
      event.preventDefault();
      this.loginMessage = 'Login Successful';
      setTimeout(() => {
      window.location.reload();
      }, 1000);
  }
}
