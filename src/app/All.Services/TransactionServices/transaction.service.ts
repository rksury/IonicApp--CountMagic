import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {AlertController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    baseurl = environment.base_url;

    constructor(private httpClient: HttpClient,
                private alertCtrl: AlertController) {
    }

    async presentAlert(headervalue, messagevalue) {
        let alert = await this.alertCtrl.create({
            header: headervalue,
            // subHeader: '10% of battery remaining',
            message: messagevalue,
            buttons: ['Dismiss']
        });
        await alert.present();
    }

    // tslint:disable-next-line:no-shadowed-variable
    createErrorAlert(error) {
        console.log(error.error);
        const err = error.error;
        // tslint:disable-next-line:forin
        for (const key in err) {
            let value = err[key];
            console.log(value[0]);
            this.presentAlert('Error', value[0]);
            // Use `key` and `value`
        }

    }

    getTransactions() {
        let authheaders = new HttpHeaders();
        const token = window.localStorage.getItem('token')
        authheaders = authheaders.set('Authorization', 'Bearer ' + token);
        const url = this.baseurl + 'api/transaction'
        return this.httpClient.get<any>(url, {headers: authheaders});
    }

    createTransactions(payloaddata) {
        let authheaders = new HttpHeaders();
        const token = window.localStorage.getItem('token')
        authheaders = authheaders.set('Authorization', 'Bearer ' + token);
        const url = this.baseurl + 'api/transaction'
        return this.httpClient.post<any>(url, payloaddata, {headers: authheaders}).pipe(
            tap(
                data => console.log('Transaction Created.'),
                error => this.createErrorAlert(error)
            )
        );

    }
}
