import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

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
}
