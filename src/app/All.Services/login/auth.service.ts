import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
                window.localStorage.clear()
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('user_id', data.user);
                this.router.navigate(['/tabs/home']);

            }, error => {
                window.alert(error.error);
            }
        );
    }

    getUserWithPhone(phonenumber) {
        let authheaders = new HttpHeaders();
        const token = window.localStorage.getItem('token')
        authheaders = authheaders.set('Authorization', 'Bearer ' + token);
        const url = this.baseurl + 'api/user/' + phonenumber
        return this.httpClient.get<any>(url, {headers: authheaders});

    }

    verifyToken() {
        const url = this.baseurl + 'api/user/verify-token';
        this.httpClient.post(url, {token: window.localStorage.getItem('token')}).subscribe(data => {
            },
            error => {
                if (error.status === 400) {
                    this.router.navigate(['/login']);
                }
            }
        )
        ;
    }
}
