import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/interfaces/characters';
import { ISpacecraft } from 'src/app/interfaces/spacecraft';
import { JediService } from 'src/app/services/jedi.service';
import { SithService } from 'src/app/services/sith.service';
import { SpacecraftService } from 'src/app/services/spacecraft.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {
  @Input() currentPage: number = 0;
  @Input() cardsPerPage: number = 0;
  @Output() cardsLengthChanged: EventEmitter<number> =
    new EventEmitter<number>();

  cards: any[] = [];
  modalId: string = 'charModal';

  constructor(
    private activatedRoute: ActivatedRoute,
    private jediService: JediService,
    private sithService: SithService,
    private spacecraftService: SpacecraftService
  ) {}

  ngOnInit() {
    if (this.activatedRoute.snapshot.url[0].path === 'jedi') {
      this.jediService.getJedis().subscribe((jedis: ICharacter[]) => {
        this.cards = jedis;
        this.cardsLengthChanged.emit(this.cards.length);
      });
    } else if (this.activatedRoute.snapshot.url[0].path === 'sith') {
      this.sithService.getSiths().subscribe((siths: ICharacter[]) => {
        this.cards = siths;
        this.cardsLengthChanged.emit(this.cards.length);
      });
    } else if (this.activatedRoute.snapshot.url[0].path === 'spacecrafts') {
      this.spacecraftService
        .getSpacecrafts()
        .subscribe((spacecrafts: ISpacecraft[]) => {
          this.cards = spacecrafts;
          this.cardsLengthChanged.emit(this.cards.length);
        });
    }
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.cardsPerPage;
  }

  get endIndex(): number {
    return this.currentPage * this.cardsPerPage;
  }
}
