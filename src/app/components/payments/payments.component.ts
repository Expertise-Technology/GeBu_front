import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../../models/payment.model';
import { CenterService } from '../../services/center.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit {

  // @Input() centerId!: number;
  // payments: Payment[] = [];

  constructor(private centerService: CenterService) {}

  ngOnInit() {
    // const center = this.centerService.getCenterById(this.centerId);
    // if (center) {
    //   this.payments = center.budget.payments;
    // }
  }

  // addPayment(description: string, amount: number) {
  //   const payment: Payment = { id: Date.now(), description, amount, date: new Date() };
  //   this.centerService.addPayment(this.centerId, payment);
  //   this.ngOnInit(); // Refresh the payments list
  // }

}
