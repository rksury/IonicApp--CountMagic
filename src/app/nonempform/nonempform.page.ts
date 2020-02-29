import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-nonempform',
  templateUrl: './nonempform.page.html',
  styleUrls: ['./nonempform.page.scss'],
})
export class NonempformPage implements OnInit {

  submitform = new FormGroup({
        username: new FormControl(''),
        fullname: new FormControl(''),
        email: new FormControl(''),
        dob: new FormControl(''),
        contact: new FormControl(''),
        password: new FormControl(''),
        address: new FormControl(''),
        zipcode: new FormControl(''),
        country: new FormControl(''),
        state: new FormControl(''),
        city: new FormControl(''),
        wru: new FormControl(''),
    });

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.warn(this.submitform.value);
    }
}
