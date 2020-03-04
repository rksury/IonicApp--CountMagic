import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    baseurl = environment.base_url;

    constructor(private httpClient: HttpClient) {
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
                error => window.alert('Some Error occurred.')
            )
        );

    }
}
