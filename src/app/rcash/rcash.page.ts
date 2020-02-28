import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rcash',
  templateUrl: './rcash.page.html',
  styleUrls: ['./rcash.page.scss'],
})
export class RcashPage implements OnInit {

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

    ngOnInit() {
        console.warn(this.submitform.value);
    }


}
