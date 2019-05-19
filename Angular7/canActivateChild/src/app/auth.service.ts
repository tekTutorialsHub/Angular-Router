import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { of } from 'rxjs';


@Injectable()
export class AuthService { 

    private isloggedIn: boolean;
    private userName:string;

    constructor() {
        this.isloggedIn=false;
    }

    login(username: string, password:string) {

        //Assuming users are provided the correct credentials.
        //In real app you will query the database to verify.
        this.isloggedIn=true;
        this.userName=username;
        return of(this.isloggedIn);
    }

    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }

    isAdminUser():boolean {
        if (this.userName=='Admin') {
            return true; 
        }
        return false;
    }
    
    logoutUser(): void{
        this.isloggedIn = false;
    }

} 

