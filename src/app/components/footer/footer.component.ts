import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  repository: string = 'https://github.com/christophermontero/starwars-desk';
}
