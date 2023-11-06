import { Component, Input } from '@angular/core';
import { ISpacecraft } from 'src/app/interfaces/spacecraft';

@Component({
  selector: 'app-spacecraft-info',
  templateUrl: './spacecraft-info.component.html',
  styleUrls: ['./spacecraft-info.component.less']
})
export class SpacecraftInfoComponent {
  @Input() spacecraft: ISpacecraft = {} as ISpacecraft;
}
