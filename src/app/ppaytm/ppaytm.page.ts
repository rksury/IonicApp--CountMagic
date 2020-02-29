import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-ppaytm',
    templateUrl: './ppaytm.page.html',
    styleUrls: ['./ppaytm.page.scss'],
})
export class PpaytmPage implements OnInit {

    submitform = new FormGroup({
        fullname: new FormControl(''),
        amount: new FormControl(''),
        date: new FormControl(''),
        contact: new FormControl(''),
        remark: new FormControl(''),
    });

    constructor() {
    }

   ngOnInit() {}

    onSubmit() {
        console.warn(this.submitform.value);
    }

}
