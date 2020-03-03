import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TransactionService} from '../All.Services/TransactionServices/transaction.service';

@Component({
    selector: 'app-pcheque',
    templateUrl: './pcheque.page.html',
    styleUrls: ['./pcheque.page.scss'],
})
export class PchequePage implements OnInit {

    submitform = new FormGroup({
        display_name: new FormControl(''),
        // bankname: new FormControl(''),
        // chequenumber: new FormControl(''),
        amount: new FormControl(''),
        date: new FormControl(''),
        phone_number: new FormControl(''),
        remark: new FormControl(''),
    });

    constructor(private transactionservice: TransactionService) {
    }

   ngOnInit() {}

    onSubmit() {
        console.warn(this.submitform.value);
        const pcash_data = {
            status: 'S',
            medium: 'CH',
            sender: window.localStorage.getItem('user_id')
        };
        const data = this.submitform.value;
        const tempdata = {receiver: 1};
        // const merged1 = Object.assign()
        var merged = Object.assign(data, pcash_data, tempdata);
        this.transactionservice.createTransactions(merged).subscribe();
    }

}
