import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-pcheque',
    templateUrl: './pcheque.page.html',
    styleUrls: ['./pcheque.page.scss'],
})
export class PchequePage implements OnInit {

    submitform = new FormGroup({
        fullname: new FormControl(''),
        bankname: new FormControl(''),
        chequenumber: new FormControl(''),
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
