import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    login(pass: any, username: any){
        let object = {username: username, password: pass}
        let res = this.auth.login(object)
        console.log(res);
        
        if(res == true){
            this.router.navigate(["home"])
        }
    }

}
