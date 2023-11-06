import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  brand: string = '/assets/star-wars-brand.png';

  constructor(private renderer: Renderer2) {}

  closeNavbar() {
    const navbar: HTMLElement | null = document.getElementById(
      'navbarSupportedContent'
    );
    if (navbar?.classList.contains('show')) {
      this.renderer.removeClass(navbar, 'show');
    }
  }
}
