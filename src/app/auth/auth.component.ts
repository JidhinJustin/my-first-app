import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { PlaceholderDirective } from '../placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  errorMessage: string = null as any;
  closeSubscription!: Subscription;

  @ViewChild(PlaceholderDirective)
  alertHost!: PlaceholderDirective;

  constructor(private authService: AuthService, private router:Router, private componentFactoryResolver: ComponentFactoryResolver) {}
  

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  
  submitAuthForm(data: { email: any; password: any; }) {
    if (this.isLoginMode) {
      this.authService.login(data.email, data.password).subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.errorMessage = error.error.error.message;
          this.showErrorAlert(this.errorMessage);
        }
      );
    } else {
      this.authService.signUp(data.email, data.password).subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        (error: any)=> {
          console.log(error);
        }
      );
    }
  }
  onHandleError() {
    this.errorMessage = null as any;
  }
  private showErrorAlert(message: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(
      alertComponentFactory
    );
    componentRef.instance.message = message;
      this.closeSubscription = componentRef.instance.close.subscribe(() => {
        this.closeSubscription.unsubscribe();
        hostViewContainerRef.clear();
      });
  }
}