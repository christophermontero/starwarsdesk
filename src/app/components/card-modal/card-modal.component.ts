import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/interfaces/characters';
import { ISpacecraft } from 'src/app/interfaces/spacecraft';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.less']
})
export class CardModalComponent implements OnInit {
  @Input() card: any = {} as ICharacter;
  modalId: string = 'modal';
  isSpacecraft: boolean = false;

  constructor(private acivatedRoute: ActivatedRoute) {
    if (this.acivatedRoute.snapshot.url[0].path === 'spacecrafts') {
      this.isSpacecraft = true;
      this.card = {} as ISpacecraft;
    }
  }

  ngOnInit() {
    this.modalId = this.modalId + this.card.id;
  }
}
