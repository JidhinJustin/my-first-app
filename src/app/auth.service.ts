import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "./user.model";


export interface authResponse {
  idToken: string;
  email : string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {} 
  user = new BehaviorSubject(null as any);
  tokenExpiryTimer:any;

  signUp(email: string, password: string) {
    return this.http
      .post<authResponse>(
        'http://localhost:3000/signup',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        tap((event) => {
          const user = {
            idToken: event.idToken,
            email: event.email,
            refreshToken: event.email,
            expiry : new Date(new Date().getTime() +  +event.expiresIn * 1000),
            localId : event.localId,
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.user.next(user);
          this.autoLogout(new Date(+event.expiresIn * 1000).getTime());
        })
      );
        
  }

  login(email: string, password: string) {
    return this.http
      .post<authResponse>(
        'http://locahost:3000/signin', 
        { email:email,password: password, returnSecureToken: true }
      )
      .pipe(
        tap((event) => {
          const user ={
            idToken: event.idToken,
            email: event.email,
            refreshToken: event.email,
            expiry: new Date(new Date().getTime() + +event.expiresIn * 1000),
            localId: event.localId,
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.user.next(user);
          this.autoLogout(new Date(+event.expiresIn * 1000).getTime());
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/authenticate']);
    localStorage.removeItem('user');
    if (this.tokenExpiryTimer) {
      clearTimeout(this.tokenExpiryTimer);
    }
    this.tokenExpiryTimer = null;
  }

  autoLogin() {
    const userdet: User = JSON.parse(localStorage.getItem('user') || '{}');
    if (!userdet) {
      this.user.next(null);
      return;
    } else {
      if (
        !userdet.expiry ||
        new Date().getTime() > new Date(userdet.expiry).getTime()
      ) {
        this.user.next(null);
        localStorage.removeItem('user');
        return;
      }
      this.autoLogout(
        new Date(userdet.expiry).getTime() - new Date().getTime()
      );
      this.user.next(userdet);
      return true;
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpiryTimer = setTimeout(() => {
      this.logout();
    },expirationDuration);
  }
}