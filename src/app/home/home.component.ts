import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myNumbersSubscription!: Subscription;
constructor(private router: Router) {}

  ngOnInit(): void {
    
    // const myObservable = Observable.create((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('First package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('Second package');
    //   }, 5000);
    //   setTimeout(() => {
    //     observer.error('Failed package');
    //   }, 8000);
    // });

    // myObservable.subscribe(
    //   (data: string) => {
    //     console.log(data);
    //   },
    //   (error: string) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('Observer completed');
    //   }
    // );
    const myNumbers = interval(1000);
    this.myNumbersSubscription = myNumbers.subscribe((number: Number) => {
      console.log(number);
    })
  }
  
  loadServers() {
    console.log('Loading servers...');
    this.router.navigate(['/controlpannel']);
  }

  ngOnDestroy() {
    this.myNumbersSubscription.unsubscribe();
  }
  
}
