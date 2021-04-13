import { Component,OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;
  isLoggedIn!: boolean;
  constructor (private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe((user) => {
      if (user === null ) {
        console.log(user);
        this.isLoggedIn = false;
      } else {
        console.log(user);

        this.isLoggedIn = true;
      }
    });
    console.log(this.isLoggedIn);
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
  }
}