import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { IntroComponent } from '../intro/intro.component';
import { FooterComponent } from '../footer/footer.component';
import { FoodComponent } from '../food/food.component';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent,IntroComponent,FooterComponent,
    FoodComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
