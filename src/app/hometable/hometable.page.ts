import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../All.Services/TransactionServices/transaction.service';
import {AuthService} from '../All.Services/login/auth.service';

@Component({
    selector: 'app-hometable',
    templateUrl: './hometable.page.html',
    styleUrls: ['./hometable.page.scss'],
})
export class HometablePage implements OnInit {
    data = [];

    constructor(private  transactionservice: TransactionService,
                private authservice: AuthService) {
    }

    ngOnInit() {
        this.getTransactions();
        this.authservice.verifyToken();
    }

    ionViewWillEnter() {
        this.authservice.verifyToken();
        this.getTransactions();

    }

    getTransactions() {
        this.transactionservice.getTransactions().subscribe(data => {
            this.data = data;
        }, error => {
            console.log(error);
        });

    }
}
