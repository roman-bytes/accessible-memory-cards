import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/Cards';
import { CardsService } from './../../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards:Card[];
  deck:Object;

  constructor(private cardsService:CardsService) {}

  ngOnInit() {
      this.cardsService.createDeck().subscribe(deck => {
          this.deck = deck;
      });
      
      console.log('deck', this.deck);
      if (this.deck) {
        this.cardsService.drawCards(this.deck['deck_id']).subscribe(cards => {
            this.cards = cards
        })
      }
  }
}