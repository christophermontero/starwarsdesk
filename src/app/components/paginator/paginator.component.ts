import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent implements OnChanges {
  @Input() cardsLength: number = 0;
  @Input() currentPage: number = 0;
  @Input() cardsPerPage: number = 0;
  @Output() currentPageChanged: EventEmitter<number> =
    new EventEmitter<number>();

  totalPages: number = 0;
  visiblePageCount: number = 5;
  pages: number[] = [];
  cookie: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['cardsLength'] ||
      changes['currentPage'] ||
      changes['cardsPerPage']
    ) {
      this.calculateTotalPages();
      this.generatePages();
    }
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.cardsLength / this.cardsPerPage);
  }

  generatePages() {
    this.pages = [];

    // Calculate the start and end of the visible pages
    let startPage = Math.max(1, this.currentPage - this.visiblePageCount);
    let endPage = Math.min(
      this.totalPages,
      this.currentPage + this.visiblePageCount
    );

    // Ensure that there are enough pages on both sides of the current page
    if (endPage - startPage < this.visiblePageCount) {
      if (startPage === 1) {
        endPage = Math.min(this.totalPages, startPage + this.visiblePageCount);
      } else {
        startPage = Math.max(1, endPage - this.visiblePageCount);
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      this.pages.push(page);
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.generatePages();
      this.currentPageChanged.emit(page);
    }
  }

  goToStart() {
    this.goToPage(1);
  }

  goToEnd() {
    this.goToPage(this.totalPages);
  }
}
