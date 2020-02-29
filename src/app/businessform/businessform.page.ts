import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup,} from '@angular/forms';

@Component({
    selector: 'app-businessform',
    templateUrl: './businessform.page.html',
    styleUrls: ['./businessform.page.scss'],
})
export class BusinessformPage implements OnInit {

    submitform = new FormGroup({
        username: new FormControl(''),
        fullname: new FormControl(''),
        email: new FormControl(''),
        dob: new FormControl(''),
        contact: new FormControl(''),
        password: new FormControl(''),
        address: new FormControl(''),
        homezipcode: new FormControl(''),
        country: new FormControl(''),
        state: new FormControl(''),
        city: new FormControl(''),

        companyname: new FormControl(''),
        companyzipcode: new FormControl(''),

        firmname: new FormControl(''),
        gst: new FormControl(''),
        pan: new FormControl(''),
    });

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.warn(this.submitform.value);
    }
}
