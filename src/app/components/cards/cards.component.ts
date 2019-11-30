import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Card } from '../../models/Cards';
import { Deck } from '../../models/Deck';
import { CardsService } from './../../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards:Card[];
  deck:Deck[];

  constructor(private cardsService:CardsService) {}

  ngOnInit() {

  }

  drawAllCards() {
    this.cardsService.drawCards(this.deck).subscribe(cards => {
      this.cards = cards['cards'];
    });
  }

  setDeckSize(deckSize) {
    this.cardsService.createDeck(deckSize).subscribe(deck => {
      console.log('deck', deck);
      
      this.deck = deck;
    })
  }
}