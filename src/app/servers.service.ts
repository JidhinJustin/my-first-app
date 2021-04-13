export class ServersService {
    servers = [
      {
        type: 'server',
        name: 'Anton',
        created_on: new Date(2020, 0, 15),
        content: 'i9+ Overclocked with 2000gigs of RAM',
      },
      {
        type: 'blueprint',
        name: 'Development Server',
        created_on: new Date(2020, 1, 15),
        content: 'i7 with 2000gigs of RAM',
      },
      {
        type: 'server',
        name: 'Main server',
        created_on: new Date(2019, 6, 15),
        content: 'i9+ Overlocked with ssd',
      },
      {
        type: 'blueprint',
        name: 'Test Server',
        created_on: new Date(2019, 12, 15),
        content: 'i5 Overlocked with 2000gigs of RAM',
      }
    ];

    onServerAdded(serverData: { serverName: string; serverContent: string }) {
      this.servers.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent,
        created_on: new Date(15, 7,2020),
      });
    }
  
    onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
      this.servers.push({
        type: 'blueprint',
        name: serverData.serverName,
        content: serverData.serverContent,
        created_on: new Date(15, 7, 2020),
      });
    }
  
    destroyFirst() {
      this.servers.splice(0, 1);
    }
  }

