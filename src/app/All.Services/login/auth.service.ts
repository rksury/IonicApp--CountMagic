import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {AlertController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseurl = environment.base_url;

    constructor(private httpClient: HttpClient, private router: Router,
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
        for (let key in err) {
            let value = err[key];
            console.log(value[0]);
            this.presentAlert('Error', value[0]);
            // Use `key` and `value`
        }

    }

    register(payloaddata) {
        const baseurl = this.baseurl + 'api/user/create';
        return this.httpClient.post(baseurl, payloaddata).subscribe(
            data => {
                window.alert('Successfully Registered Please Login Now.');
            },
            // tslint:disable-next-line:no-shadowed-variable
            error => {
                this.createErrorAlert(error);
            }
        )
            ;
    }

    Login(payloaddata) {

        const baseurl = this.baseurl + 'api/user/auth';

        return this.httpClient.post<any>(baseurl, payloaddata).subscribe(data => {
                window.localStorage.clear()
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('user_id', data.user);
                this.router.navigate(['/tabs/home']);

            }, error => {
                this.router.navigate(['/login']);
                // window.alert('Unable to log in with provided credentials.');
                this.createErrorAlert(error);
            }
        );
    }

    checkOnstart() {
        if (window.localStorage.getItem('token')) {
            this.router.navigate(['/tabs/home']);

        } else {
            this.router.navigate(['/login']);

        }

        // const url = this.baseurl + 'api/user/verify-token';
        // this.httpClient.post(url, {token: window.localStorage.getItem('token')}).subscribe(data => {
        //         this.router.navigate(['/tabs/home']);
        //
        //     },
        //     error => {
        //         if (error.status === 400) {
        //             this.router.navigate(['/login']);
        //         }
        //     }
        // )
        // ;
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


    logout() {
        window.localStorage.clear()
        this.router.navigate(['/login']);

    }
}
