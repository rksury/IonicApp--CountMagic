import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../All.Services/login/auth.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


    constructor(private router: Router,
                private authservice: AuthService) {
    }

    ionViewWillEnter() {
        this.authservice.verifyToken();

    }

    paymentlink() {
        this.router.navigate(['/tabs/payment']);
    }

    receivelink() {
        this.router.navigate(['/tabs/receive']);
    }

}
