import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-pbank',
    templateUrl: './pbank.page.html',
    styleUrls: ['./pbank.page.scss'],
})
export class PbankPage implements OnInit {

    submitform = new FormGroup({
        fullname: new FormControl(''),
        bankname: new FormControl(''),
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
