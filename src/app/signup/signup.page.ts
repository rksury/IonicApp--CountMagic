import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

        // SignupForm = new FormGroup({
        //     username: new FormControl(''),
        //     email: new FormControl(''),
        //     number: new FormControl(''),
        //     password: new FormControl(''),
        // });

    get username() {
        return this.SignupForm.get('username');
    }

    get email() {
        return this.SignupForm.get('email');
    }

    get number() {
        return this.SignupForm.get('mobile');
    }

    get password() {
        return this.SignupForm.get('password');
    }


    constructor(private formBuilder: FormBuilder, private router: Router) {
    }

    public errorMessage = {
        username: [
            {type: 'required', message: 'username required'},
            {type: 'minLength', message: 'username is too short'}
        ],
        email: [
            {type: 'required', message: 'E-mail required'},
            {type: 'pattern', message: 'enter a valid email address'}
        ],
        number: [
            {type: 'required', message: 'mobile number required'},
             {   type: 'minLength', message: 'Incorrect mobile number '}
        ],
        password: [
            {type: 'required', message: 'password required'},
            {type: 'minLength', message: 'password is too short '}
        ]
    };
    SignupForm = this.formBuilder.group({
        username: ['', Validators.required, Validators.minLength(3)],
        email: ['', [Validators.required, Validators.email]],
        number: ['', [Validators.required, Validators.minLength(10)]],
        password: ['', [Validators.required, Validators.minLength(6)]]

    });

    ngOnInit() {
    }

    onSubmit() {
        console.warn(this.SignupForm.value);
    }

}
