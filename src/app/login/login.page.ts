import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../All.Services/login/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    // submitform: FormGroup;
    loading = false;
    submitted = false;
    // email: string;
    // password: string;

    submitform = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private router: Router, private formBuilder: FormBuilder,
                private loginService: LoginService, private route: ActivatedRoute) {
    }

    forgetpwdlink() {
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        this.submitform = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required, Validators.email, Validators.pattern
                ('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // get function() {
    //     return this.submitform.controls;
    // }

    // LoginSubmit() {
    //     this.submitted = true;
    //
    //     // stop here if form is invalid
    //     if (this.LoginForm.invalid) {
    //         // console.log('123456789')
    //         return this.LoginForm;
    //     } else {
    //         this.loginService.Login(this.email, this.password);
    //     }
    // }

    onSubmit() {
        console.warn(this.submitform.value);
    }
}


