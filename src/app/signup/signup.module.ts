import {ErrorHandler, NgModule} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';

import {SignupPageRoutingModule} from './signup-routing.module';
import {SignupPage} from './signup.page';


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

    providers: [
        // StatusBar,
        // SplashScreen,
         // {provide: ErrorHandler, useClass: this.IonicErrorHandler},
    ]
})
export class SignupPageModule {
}
