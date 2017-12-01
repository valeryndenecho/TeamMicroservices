import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../shared/player';
import {PlayerService} from '../shared/player.service';
import {ToastyServiceInt} from '../../shared/toasty.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  @Input() player: Player;
  private players: Player[];
  param: any;

  constructor(private playerService: PlayerService, private toastyService: ToastyServiceInt) { }

  ngOnInit() {
  }

  deletePlayer(id: number) {
    this.playerService.deletePlayer(id).subscribe( data => {
      console.log('Player: ' + id + ' deleted' );
      const toastyMsg = `Player with${id} deleted`;
      this.toastyService.setToastySuccess('Success', toastyMsg);
      this.getAllPlayers();
    });
  }

  getAllPlayers() {
    this.playerService.getAllPlayers( this.param).subscribe( data => {
      console.log(data);
      this.players = JSON.parse(data._body);
    });
  }
}
