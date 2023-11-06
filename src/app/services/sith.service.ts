import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/characters';

@Injectable({
  providedIn: 'root'
})
export class SithService {
  private _url: string = 'assets/data/siths.json';

  constructor(private http: HttpClient) {}

  getSiths() {
    return this.http.get<ICharacter[]>(this._url);
  }
}
