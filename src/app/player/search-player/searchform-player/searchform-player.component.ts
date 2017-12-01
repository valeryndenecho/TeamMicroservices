import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-searchform-player',
  templateUrl: './searchform-player.component.html',
  styleUrls: ['./searchform-player.component.css']
})
export class SearchformPlayerComponent implements OnInit {
  @Output() id: EventEmitter<number> = new EventEmitter<number>();
  pid: number;
  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    this.id.next(this.pid);
  }

}
