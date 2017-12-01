import {Inject, Injectable} from '@angular/core';
import {Http, Response } from '@angular/http';
import {baseUri} from '../../shared/configs';
import {Player} from './player';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService {

  constructor(@Inject(Http) private readonly http: Http) { }

/*  let params = new HttpParams();
  params = params.append('var1', val1);
  params = params.append('var2', val2);

  this.http.get(StaticSettings.BASE_URL, {params: params}).subscribe(...);
  {params: {var1: val1, var2: val2}} */

  getAllPlayers(params): Observable<any> {
    return this.http
      .get(baseUri + `/players`, {params});
  }

  getPlayerById(id: number): Observable<any> {
    return this.http
      .get(baseUri + `/player/${id}`);
  }

  getPlayerByVorname(vorname: string): Observable<any>  {
    return this.http
      .get(baseUri + `/players/${vorname}`); // .map(response => this.toPlayer(response));
  }

  createPlayer(player: Player): Observable<any> {
    return this.http
      .post(baseUri + `/players` , player);
  }

  updatePlayer(player: any, id: number): Observable<any> {
    return this.http
      .put(baseUri + `/players/${id}` , player);
  }

  deletePlayer(id: number): Observable<any> {
    return this.http
      .delete(baseUri + `/player/${id}`);
  }
}
