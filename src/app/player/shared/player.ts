
export interface Player {
  id: number;
  vorname: string;
  name: string;
}

export class Player implements Player {
  static  fromServer(playerServer: Player) {
    const player = new Player(playerServer.id, playerServer.vorname, playerServer.name);
    return player;
  }
  constructor(public id: number, public vorname: string, public name: string) {}
}
