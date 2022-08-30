import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
export class Appservice{
    url=environment.apiUrl;
    requests: any;
    constructor(private http:HttpClient){
    }
    getSitedata(){
        return this.http.get(`${this.url}/api/v2/guest/search/`);
     }
}