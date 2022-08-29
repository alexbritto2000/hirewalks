import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class Appservice{
    requests: any;
    constructor(private http:HttpClient){
    }
    getSitedata(){
        return this.http.get('https://dev.hirewalks.com/api/v2/guest/search/');
     }
}