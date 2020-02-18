import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    get username(){
        return this.SignupForm.get('username')
        }
     get email(){
        return this.SignupForm.get('email')
     }
      get mobile(){
        return this.SignupForm.get('mobile')
     }
     get password(){
        return this.SignupForm.get('password')
     }

     public errorMessage = {
     username:[
        {   type:'required', message: 'username required'},
        {   type: 'minLength', message: 'username is too short'}
     ],
     email:[
        {   type:'required', message: 'E-mail required'},
        {   type: 'pattern', message: 'enter a valid email address'}
     ],
     mobile:[
        {   type:'required', message: 'mobile number required'},
        {   type: 'minLength', message: 'Incorrect mobile number '}
     ],
     password:[
        {   type:'required', message: 'password required'},
        {   type: 'minLength', message: 'password is too short '}
     ]
}


  constructor(private formBuilder: FormBuilder, private router: Router ){}

   ngOnInit() {}
     SignupForm = this.formBuilder.group({
	username: ['', Validators.required, Validators.minLength(3)],
	email: ['', [Validators.required, Validators.email]],
	mobile: ['', [Validators.required, Validators.minLength(10)]],
	password: ['', [Validators.required, Validators.minLength(6)]]

});



// onSubmit(){
//
// this.isSubmitted = true;
//   if (!this.SignupForm.valid) {
//
//     return false;
//   } else {
//     console.log(this.SignupForm.value)
//   }
// }
}