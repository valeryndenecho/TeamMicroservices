import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from "../shared/player";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PlayerService} from "../shared/player.service";
import {Router} from "@angular/router";
import { ToastyServiceInt } from '../../shared/toasty.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {
  pageTitle = 'New player';
  @Input() player: Player;
  @Output() refreshSearch: EventEmitter<Player> = new EventEmitter<Player>();
  form: FormGroup;
  id: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  param: any; // denke was besseres aus

  constructor(private playerService: PlayerService, private readonly formBuilder: FormBuilder, private router: Router,
              private toastyService: ToastyServiceInt) { }

  ngOnInit() {
    this.playerService.getAllPlayers(this.param).subscribe( data => {
      this.player = JSON.parse(data['_body']);
    this.id = new FormControl(this.player.id);
    this.firstName = new FormControl(this.player.vorname);
    this.lastName = new FormControl(this.player.name);

    this.form = this.formBuilder.group({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName
    });
    });
  }

  onCreate() {
    const playerTmp = new Player(this.id.value, this.firstName.value, this.lastName.value);
    console.log(playerTmp);
    this.playerService.createPlayer (playerTmp).subscribe( data => {
      this.refreshSearch.next(playerTmp);
      const toastyMsg = `Player created!`;
      this.toastyService.setToastySuccess('Success!', toastyMsg);
      this.router.navigate(['/searchplayers']);
    });
  }
}

