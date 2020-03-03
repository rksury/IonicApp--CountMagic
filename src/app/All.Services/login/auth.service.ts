import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseurl = environment.base_url;

    constructor(private httpClient: HttpClient, private router: Router) {

    }

    Login(payloaddata) {

        const baseurl = this.baseurl + 'api/user/auth';

        return this.httpClient.post<any>(baseurl, payloaddata).subscribe(data => {
                window.localStorage.setItem('token', data.token);
            }, error => {
                window.alert(error.error);
            }
        );
    }
}
