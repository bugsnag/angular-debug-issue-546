import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WebService {
    constructor(private http: HttpClient) {}
    go () {
      console.log('go: get')
      return this.http.get('https://httpstat.us/403').subscribe(() => {
        console.log('subscription callback')
      }/*, () => console.log('subscription error handler')*/)
    }
}
