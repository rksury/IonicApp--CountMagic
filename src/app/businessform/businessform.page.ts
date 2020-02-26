import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,} from '@angular/forms';
import {Router} from '@angular/router';
import { BusinessformService } from "../All.Services/businessform.service";

@Component({
    selector: 'app-businessform',
    templateUrl: './businessform.page.html',
    styleUrls: ['./businessform.page.scss'],
})
export class BusinessformPage implements OnInit {

  BusinessFormgroup: FormGroup;
  submitted = false;
  username: 'string';
  fullname: 'string';
  email: 'string';
  dob: 'string';
  number: 'integer';
  Password: 'string';
  address: 'string';


  companyname: 'string';
  zipcode: 'string';

  firmname: 'string';
  gst: 'string';
  pan: 'string';

  errors = [];


  constructor(private formBuilder: FormBuilder, private router: Router, private businessformService: BusinessformService) {
  }


  ngOnInit() {}

  OnSubmit(dataTosend) {


    this.submitted = true;

    if (this.BusinessFormgroup.invalid) {
      return this.BusinessFormgroup;
    } else {


      this.businessformService.savedata(dataTosend).subscribe(data => {

        if (data === true) {
          console.log("123456")
        }
        // console.log(data);

        // alert('Successful Save');
        addError => this.errors = addError;
      });
      this.router.navigate(['./tabs/home']);
    }

  }
}