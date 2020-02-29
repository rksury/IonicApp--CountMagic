import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rcheque',
  templateUrl: './rcheque.page.html',
  styleUrls: ['./rcheque.page.scss'],
})
export class RchequePage implements OnInit {

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
