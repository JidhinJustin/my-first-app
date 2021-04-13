import { ServersService } from './../servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlpannel',
  templateUrl: './controlpannel.component.html',
  styleUrls: ['./controlpannel.component.css'],
})
export class ControlpannelComponent implements OnInit {
  message = 'Hello World! This is my first angular experience 🤩';
  constructor(private serversService: ServersService) {}

  ngOnInit(): void {}

  AddServer(serverData: { serverName: string; serverContent: string }) {
    this.serversService.onServerAdded(serverData);
  }

  AddBlueprint(serverData: { serverName: string; serverContent: string }) {
    this.serversService.onBlueprintAdded(serverData);
  }

  destroyFirst() {
    this.serversService.destroyFirst();
  }
}