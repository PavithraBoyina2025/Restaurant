import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-menu',
  imports: [RouterModule,CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems = [
    { name: 'Pizza Margherita', description: 'Classic pizza with tomato sauce, mozzarella, and basil', price: 17.99 },
    { name: 'Spaghetti Carbonara', description: 'Pasta with creamy sauce, pancetta, and Parmesan', price: 16.99 },
    { name: 'Fettuccine al Pomodoro', description: 'Pomodoro simply means “tomato,” and it is the tomato and basil sauce that gives this dish its iconic fresh taste', price: 15.99 },
    { name: 'Chicken Alfredo', description: 'Pasta with creamy Alfredo sauce and grilled chicken', price: 16.99 },
    { name: 'Lasagne alla Bolognese', description: 'multiple layers of tomato, and onion bolognese sauce, bechamel sauce, and lasagne pasta sheets until the cheesy top', price: 16.99 },
    { name: 'Chicken Cheeseburgers', description: 'topped with shredded lettuce, sweet pickles, and curry mustard', price: 14.99 }
  ];
  drinks = [
    { name: 'Shirley Temple', description: 'bright-red mix of grenadine and lemon-lime soda ', price: 6.99 },
    { name: 'Agua Fresca', description: 'Part watermelon juice, part limeade, and 100% refreshing', price: 7.99 },
    { name: 'Clementine Mock mojito', description: 'The citrus flavour is enhanced with notes of orange blossom, water and fresh mint.', price: 7.99 },
    { name: 'Pear and Rose Punch', description: 'A delicate blend of pear, apple and rose ', price: 8.99 },
    { name: 'Faux Fizz', description: 'base syrup of pear, apricots, honey, lemon and rosemary', price: 9.50 },
    { name: 'Passion Fruit Martini', description: 'Combine fresh passion fruit and lemon juice', price: 8.99 }
  ];
  dessert = [
    { name: 'Classic Tres Leches Cake', description: 'uses three kinds of milk—evaporated, condensed and cream', price: 10.99 },
    { name: 'India: Kulfi', description: 'a spiced and nutty frozen custard in cone molds', price: 10.19 },
    { name: 'Creamy Caramel Flan', description: 'rich, creamy, caramel flan dessert .', price: 9.99 },
    { name: 'Tangerine Chocolate Semifreddo', description: 'citrusy, chocolaty version of classic Italian semifreddo', price: 9.75 },
    { name: 'UK:Old English Trifle', description: 'Loaded with cake cubes and fruit', price: 9.50 },
    { name: 'Tiramisu', description: 'creamy mascarpone,coffee-and-liquor-soaked ladyfingers', price: 9.99 }
  ];
  starters = [
    { name: 'Chicken spring rolls', description: 'spring rolls filled with chicken and vegetables', price: 11.99 },
    { name: 'Chilli Prawns', description: 'Indian touch marinated in spices', price: 13.89 },
    { name: 'Meatballs', description: 'fried minced chicked with bread crumbs, minced onion', price: 11.99 },
    { name: 'Keema samosa', description: 'filled with crispy mutton,finely chopped onions and green chillies.', price: 12.95 },
    { name: 'Chicken Majestic', description: 'strips of chicken served with sauce and other spices', price: 12.50 },
    { name: 'Seekh kebabs', description: 'minced meat grilled with a tandoor, giving a crusty texture', price: 13.99 }
  ];
  
}
