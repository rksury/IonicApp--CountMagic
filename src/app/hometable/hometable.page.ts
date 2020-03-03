import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../All.Services/TransactionServices/transaction.service';

@Component({
    selector: 'app-hometable',
    templateUrl: './hometable.page.html',
    styleUrls: ['./hometable.page.scss'],
})
export class HometablePage implements OnInit {
    data = [];

    constructor(private  transactionservice: TransactionService) {
    }

    ngOnInit() {
        this.getTransactions();
    }

    ionViewWillEnter() {
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
