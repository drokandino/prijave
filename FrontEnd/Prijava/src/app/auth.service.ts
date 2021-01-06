import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    loggedIn = false;

    constructor(private http: HttpClient) { }

    register(postObject: any){
        this.http.post("http://localhost:8080/registerUser", postObject)
        .subscribe(res => {})
    
        this.loggedIn = true;

    }

    login(getObject: any): boolean{
        let response

        this.http.post("http://localhost:8080/login", getObject)
        .subscribe(res => {
            console.log(res);          
            if(res.success == "true"){
                this.loggedIn = true;
                
            }
        })
        return this.loggedIn
    }

    getLoggedIn(){
        return this.loggedIn;
    }
    setLoggedIn(val: boolean){
        this.loggedIn = val;
    }
}
