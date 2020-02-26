import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class BusinessformService {

    constructor(private httpClient: HttpClient, private router: Router) {}

    savedata(dataTosend): Observable<boolean> {
        const url = 'https://request.in/api/busineform';
        console.log("123456789");
        return this.httpClient.post<any>(url, dataTosend,
            {
                headers: new HttpHeaders(
                    {'data-type': 'application.json'})
            });
    }
}
