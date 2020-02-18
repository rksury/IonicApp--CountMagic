import { ErrorHandler, NgModule } from '@angular/core';import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';
import { IonicModule } from '@ionic/angular';
import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';
import { RouterModule} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    HttpClientModule,
    SignupPageRoutingModule
  ],
  declarations: [
  SignupPage
  ],

//   providers: [
//     StatusBar,
//     SplashScreen,
//     {provide: ErrorHandler, useClass: IonicErrorHandler},
//    ]
})
export class SignupPageModule {}
