import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../All.Services/login/auth.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
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

    logout() {
        this.authservice.logout();
    }


}
