import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../All.Services/login/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    LoginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    })

    ionViewWillEnter() {
        this.loginService.checkOnstart();

    }


    constructor(private router: Router, private formBuilder: FormBuilder,
                private loginService: AuthService, private route: ActivatedRoute) {
    }

    forgetpwdlink() {
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        this.LoginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    // get function() {
    //     return this.LoginForm.controls;
    // }

    // LoginSubmit() {
    //     this.submitted = true;
    //
    //     // stop here if form is invalid
    //     if (this.LoginForm.invalid) {
    //         // console.log('LoginForm')
    //         return this.LoginForm;
    //     } else {
    //         this.loginService.Login(this.email, this.password);
    //     }
    // }
    onSubmit() {
        this.loginService.Login(this.LoginForm.value);

    }
}


