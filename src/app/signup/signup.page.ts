import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../All.Services/login/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    SignupForm = new FormGroup({
        username: new FormControl(''),
        email: new FormControl(''),
        phone_number: new FormControl(''),
        password: new FormControl(''),
    });


    constructor(private formBuilder: FormBuilder, private router: Router,
                private authservice: AuthService) {
    }


    ngOnInit() {
        // this.SignupForm = this.formBuilder.group({
        //     username: ['', Validators.required, Validators.minLength(3)],
        //     email: ['', [Validators.required, Validators.email]],
        //     number: ['', [Validators.required, Validators.minLength(10)]],
        //     password: ['', [Validators.required, Validators.minLength(6)]]
        //
        // });
    }

    onSubmit() {
        const type = {type: 'O'}
        const data = Object.assign(this.SignupForm.value, type)
        this.authservice.register(data)
        console.warn(this.SignupForm.value);
    }

}
