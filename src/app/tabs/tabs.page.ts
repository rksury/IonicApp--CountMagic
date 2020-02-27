import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private router: Router) {}

  paymentlink() {
    this.router.navigate(['/tabs/payment']);
  }

  receivelink() {
    this.router.navigate(['/tabs/receive']);
  }
  logout() {
    this.router.navigate(['/login']);
  }



}
