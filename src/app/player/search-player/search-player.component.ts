import { Component, OnInit } from '@angular/core';
import {Player} from '../shared/player';
import {PlayerService} from '../shared/player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {
  p: 1;
  pageTitle = 'Players';
  private player: Player;
  private players: Player[];
  private updateActive = false;
  private searchparam: any;
  private selectedPlayer: Player;
  private event: any;

  public params = {
    size: 10,
    page: 0,
    sort: 'name,ASC'
  };
  sortBy = 'name';
  sortDir = 'ASC';

  constructor(private playerService: PlayerService, private router: Router) {
    this.players = [];
  }

  ngOnInit() {
    this.getAllPlayers();
  }

  getPlayer(searchparam: any) {
    this.searchparam = searchparam;
    this.players.length = 0;
    if (searchparam) {
      if (Number(searchparam)) {
        this.getPlayerById(searchparam);
      } else {
        this.getPlayerByFirstName(searchparam);
      }
    } else {
      this.getAllPlayers();
    }
  }

  setSortDirection(newSortValue) {
    this.sortBy = newSortValue;
    this.toggleSortDir();
    this.params.sort = this.sortBy + ',' + this.sortDir;
    this.getAllPlayers();
  }

  toggleSortDir() {
    if (this.sortDir === 'ASC') {
      this.sortDir = 'DESC';
    } else {
      this.sortDir = 'ASC';
    }
  }

  pageChanged(event) {
    this.p = event;
    this.event = event;
    this.params.page = this.event - 1;
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.playerService.getAllPlayers(this.params).subscribe( data => {
      console.log(data);
      console.log(data._body);
      this.players = JSON.parse(data._body);
    });
  }

  getPlayerById(id: number) {
    this.playerService.getPlayerById(id).subscribe(data => {
      console.log(data);
      this.players = JSON.parse(data._body);
    });
  }

  getPlayerByFirstName(firstname: string) {
    this.playerService.getPlayerByVorname(firstname).subscribe(data => {
      console.log(data);
      const body = JSON.parse(data._body);
      this.players = body;
    });
  }

  setUpdatePlayer(id: any) {
    this.playerService.getPlayerById(id).subscribe(data => {
      this.player = data;
      this.updateActive = true;
    });
  }

  refreshSearch(player: Player) {
    this.setPlayer(player);
    this.getPlayer(this.searchparam);
  }

  setPlayer(player: Player) {
    this.player = player;
  }

  onSelect(player: Player) {
    this.selectedPlayer = player;
  }
}
