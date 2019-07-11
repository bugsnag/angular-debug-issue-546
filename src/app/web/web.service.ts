import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WebService {
    constructor(private http: HttpClient) {}
    go () {
      return this.http.post('https://httpstat.us/403/cors', {}).subscribe(() => {
        console.log('http request subscription callback')
      }/*, () => console.log('http request subscription error handler')*/)
    }
}
