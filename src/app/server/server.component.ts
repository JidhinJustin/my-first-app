
import { Component,Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
})
export class ServerComponent implements OnInit {
  @Input('servElement') element!: {
    type: string;
    name: string;
    content: string;
  };
  constructor() {
    console.log('Constructor has been called');
  }

  ngOnInit() {
    console.log('ngOnInit has been called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges has been called ');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck is called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit is called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy is called');
  }
}