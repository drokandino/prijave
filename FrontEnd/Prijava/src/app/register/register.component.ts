import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    register(pass: any, username: any){
        let postObject = {
            username: username, 
            password: pass
        }
        this.auth.register(postObject)

        this.router.navigate(["home"])
        }
}




