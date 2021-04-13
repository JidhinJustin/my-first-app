import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
})
export class CreatorComponent implements OnInit {
  serverName: string = '';
  serverContent: string = '';
  ngOnInit(): void {}

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  
  onServerAdded() {
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent,
    });
  }

  onBlueprintAdded() {
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent,
    });
  }
}
