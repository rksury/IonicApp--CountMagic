import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rbank',
  templateUrl: './rbank.page.html',
  styleUrls: ['./rbank.page.scss'],
})
export class RbankPage implements OnInit {

  constructor() { }

 submitform = new FormGroup({
        fullname: new FormControl(''),
        bankname: new FormControl(''),
        amount: new FormControl(''),
        date: new FormControl(''),
        contact: new FormControl(''),
        remark: new FormControl(''),
    });

    ngOnInit() {
        console.warn(this.submitform.value);
    }

}
