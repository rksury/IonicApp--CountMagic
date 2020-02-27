import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    Login(email: string, password: string) {

        const baseurl = 'https://redeventures.translations.ai/redeventure/' + 'login/authenticateUser';

        return this.httpClient.post<any>(baseurl, {username: email, Password: password}).subscribe(data => {
            if (data.email === true) {

                // console.log('Succesful login');
                this.router.navigate(['/tabs/home']);
            } else {

                console.log('Invalid Id or Password');
            }
        });
    }
}
