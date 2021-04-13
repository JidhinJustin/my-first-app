import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-serverdetails',
  templateUrl: './serverdetails.component.html',
  styleUrls: ['./serverdetails.component.css']
})
export class ServerdetailsComponent implements OnInit {
  serverId!: number;
  serverDetails!: { type: string; name: string; content: string; };

  constructor(
    private route: ActivatedRoute,
    private serversService: ServersService
  ) {}

  ngOnInit(): void {
    this.serverId = this.route.snapshot.params['id'];
    this.serverDetails = this.serversService.servers[this.serverId];
  }
}

