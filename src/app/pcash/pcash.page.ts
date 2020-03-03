import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AuthService} from '../All.Services/login/auth.service';
import {TransactionService} from '../All.Services/TransactionServices/transaction.service';

@Component({
    selector: 'app-pcash',
    templateUrl: './pcash.page.html',
    styleUrls: ['./pcash.page.scss'],
})
export class PcashPage implements OnInit {
    otheruser = null
    // tslint:disable-next-line:variable-name

    submitform = new FormGroup({
        display_name: new FormControl(''),
        amount: new FormControl(''),
        date: new FormControl(''),
        phone_number: new FormControl(''),
        remark: new FormControl(''),
    });

    constructor(private authservice: AuthService,
                private transactionservice: TransactionService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        const phonenumber = this.submitform.get('phone_number').value;
        // this.authservice.getUserWithPhone(phonenumber).subscribe(data => {
        //     this.otheruser = data.id;
        //     console.log(data.id);
        // });
        // tslint:disable-next-line:variable-name
        const pcash_data = {
            status: 'S',
            medium: 'C',
            sender: window.localStorage.getItem('user_id')
        };
        const data = this.submitform.value;
        const tempdata = {receiver: 1};
        // const merged1 = Object.assign()
        var merged = Object.assign(data, pcash_data, tempdata);
        this.transactionservice.createTransactions(merged).subscribe();
    }

}

