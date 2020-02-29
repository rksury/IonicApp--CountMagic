import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-rpaytm',
    templateUrl: './rpaytm.page.html',
    styleUrls: ['./rpaytm.page.scss'],
})
export class RpaytmPage implements OnInit {


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
