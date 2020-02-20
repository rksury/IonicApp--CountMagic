import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-processing',
    templateUrl: './processing.page.html',
    styleUrls: ['./processing.page.scss'],
})
export class ProcessingPage {

    constructor(private router: Router) {
    }

    nonemplink() {
        this.router.navigate(['/tabs/home'])
    };

    emplink() {
        this.router.navigate(['/tabs/home'])
    };

    businessmenlink() {
        this.router.navigate(['/tabs/home'])
    };

}
