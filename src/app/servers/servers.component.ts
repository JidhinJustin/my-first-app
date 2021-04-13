import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  animations: [
    trigger('list', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0px)',
        })
      ),

      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(600),
      ]),
      transition('* => void', [
        animate(
          500,
          style({
            backgroundColor: 'white',
            transform: 'translateX(50px)',
          })
        ),
        animate(
          600,
          style({
            opacity: 0,
            transform: 'translateX(-150px)',
          })
        ),
      ]),
    ]),
  ],
})
export class ServersComponent implements OnInit {
  servers: {
    type: string;
    name: string;
    content: string;
    created_on: Date;
  }[] = [];
  constructor(private serversService: ServersService) {
    this.servers = this.serversService.servers;
  }
  ngOnInit(): void {
  }

  onAnimationComplete(event: any){
    console.log(event);
  }
  onAnimationStart(event: any) {
    console.log(event);
  }
}


  