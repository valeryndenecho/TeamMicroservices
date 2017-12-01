import {Component, EventEmitter, OnChanges, Input, Output, OnInit} from '@angular/core';
import {PlayerService} from '../shared/player.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Player} from '../shared/player';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { ToastyServiceInt } from '../../shared/toasty.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnChanges, OnInit {
  pageTitle = 'Edit player';
  player: Player;

  @Output() refreshSearch: EventEmitter<Player> = new EventEmitter<Player>();
  form: FormGroup;
  id: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  private sub: Subscription;

  constructor(private playerService: PlayerService, private readonly formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private toastyService: ToastyServiceInt) {
  }

  ngOnChanges() {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const playerId = +params['playerId']; // (+) converts string 'id' to a number
      this.playerService.getPlayerById(playerId).subscribe(data => {
        this.player = JSON.parse(data['_body']);
        console.log(data['_body']);
        this.id = new FormControl(this.player.id);
        this.firstName = new FormControl(this.player.vorname);
        this.lastName = new FormControl(this.player.name);

        this.form = this.formBuilder.group({
          id: this.id,
          firstName: this.firstName,
          lastName: this.lastName
        });
      });

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onUpdate() {
    const playerTmp = new Player(this.id.value, this.firstName.value, this.lastName.value);
    this.playerService.updatePlayer(playerTmp, this.id.value).subscribe(data => {
      this.refreshSearch.next(playerTmp);
      this.router.navigate(['/searchplayers']);
      const toastyMsg = `Player ${playerTmp.id} updated`;
      this.toastyService.setToastySuccess('Success!', toastyMsg);
    });
  }

}
