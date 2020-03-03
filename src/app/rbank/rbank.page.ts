import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TransactionService} from '../All.Services/TransactionServices/transaction.service';

@Component({
    selector: 'app-rbank',
    templateUrl: './rbank.page.html',
    styleUrls: ['./rbank.page.scss'],
})
export class RbankPage implements OnInit {

    constructor(private transactionservice: TransactionService) {
    }

    submitform = new FormGroup({
        display_name: new FormControl(''),
        bankname: new FormControl(''),
        amount: new FormControl(''),
        date: new FormControl(''),
        phone_number: new FormControl(''),
        remark: new FormControl(''),
    });

    ngOnInit() {
    }

    onSubmit() {
        console.warn(this.submitform.value)
        const pcash_data = {
            status: 'R',
            medium: 'B',
            receiver: window.localStorage.getItem('user_id')
        };
        const data = this.submitform.value;
        const tempdata = {sender: 1};
        // const merged1 = Object.assign()
        var merged = Object.assign(data, pcash_data, tempdata);
        this.transactionservice.createTransactions(merged).subscribe();
    }
}
