import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'app-pcash',
    templateUrl: './pcash.page.html',
    styleUrls: ['./pcash.page.scss'],
})
export class PcashPage implements OnInit {

    submitform = new FormGroup({
        fullname: new FormControl(''),
        amount: new FormControl(''),
        date: new FormControl(''),
        contact: new FormControl(''),
        remark: new FormControl(''),
    });

    constructor() {
    }

    ngOnInit() {

        console.warn(this.submitform.value);
    }

}

