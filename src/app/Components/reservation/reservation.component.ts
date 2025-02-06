import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

interface Reservation {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
}
@Component({
  selector: 'app-reservation',
  imports: [NavbarComponent,FooterComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  reservationForm: FormGroup;
  reservations: Reservation[] = [];

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guests: [1, [Validators.required, Validators.min(1)]]
    });
  }

  submitReservation() {
    if (this.reservationForm.valid) {
      this.reservations.push(this.reservationForm.value);
      this.reservationForm.reset();
    }
  }
}