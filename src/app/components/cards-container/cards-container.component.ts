import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.less']
})
export class CardsContainerComponent {
  currentPage: number = 1;
  cardsPerPage: number = 8;
  cardsLength: number = 0;

  handleCurrPageChanged(currPage: number) {
    this.currentPage = currPage;
  }

  handleCardsLengthChanged(cardsLength: number) {
    this.cardsLength = cardsLength;
  }
}
