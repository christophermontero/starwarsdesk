import { Component, Input } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/characters';

@Component({
  selector: 'app-char-table',
  templateUrl: './char-table.component.html',
  styleUrls: ['./char-table.component.less']
})
export class CharTableComponent {
  @Input() char: ICharacter = {} as ICharacter;
}
