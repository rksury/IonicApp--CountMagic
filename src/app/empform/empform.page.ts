import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-empform',
  templateUrl: './empform.page.html',
  styleUrls: ['./empform.page.scss'],
})
export class EmpformPage implements OnInit {

   submitform = new FormGroup({
        username: new FormControl(''),
        fullname: new FormControl(''),
        email: new FormControl(''),
        dob: new FormControl(''),
        contact: new FormControl(''),
        password: new FormControl(''),
        address: new FormControl(''),
        country: new FormControl(''),
        state: new FormControl(''),
        city: new FormControl(''),
        homezipcode: new FormControl(''),

        companyname: new FormControl(''),
        pan: new FormControl(''),
        companyzipcode: new FormControl(''),
    });

    constructor() {}

    ngOnInit() {}

    onSubmit() {
        console.warn(this.submitform.value);
    }
}
