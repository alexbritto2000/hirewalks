import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class Appservice{
    constructor(private http:HttpClient){
    }
    getSitedata(){
        return this.http.get('https://dev.hirewalks.com/api/v2/guest/search/');
    }
}