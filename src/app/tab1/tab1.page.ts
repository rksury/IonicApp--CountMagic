import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../All.Services/login/auth.service';
import {TransactionService} from '../All.Services/TransactionServices/transaction.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    data = [];

    constructor(private router: Router,
                private authservice: AuthService,
                private  transactionservice: TransactionService) {
    }

    ionViewWillEnter() {
        this.authservice.verifyToken();
        this.getTransactions();


    }


    paymentlink() {
        this.router.navigate(['/tabs/payment']);
    }

    receivelink() {
        this.router.navigate(['/tabs/receive']);
    }

    getTransactions() {
        this.transactionservice.getTransactions().subscribe(data => {
            this.data = data;
        }, error => {
            console.log(error);
        });

    }
}
