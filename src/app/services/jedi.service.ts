import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/characters';

@Injectable({
  providedIn: 'root'
})
export class JediService {
  private _url: string = 'assets/data/jedis.json';

  constructor(private http: HttpClient) {}

  getJedis() {
    return this.http.get<ICharacter[]>(this._url);
  }
}
