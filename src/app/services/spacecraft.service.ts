import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISpacecraft } from '../interfaces/spacecraft';

@Injectable({
  providedIn: 'root'
})
export class SpacecraftService {
  private _url: string = 'assets/data/spacecrafts.json';

  constructor(private http: HttpClient) {}

  getSpacecrafts() {
    return this.http.get<ISpacecraft[]>(this._url);
  }
}
