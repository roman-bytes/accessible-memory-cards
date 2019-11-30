import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deck } from '../models/Deck';
import { Card } from '../models/Cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cardsUrl:string = 'https://deckofcardsapi.com/api/deck/';
  newDeck:string = 'new/';
  draw:string = '';
  constructor(private http:HttpClient) { }

  drawCards(deck):Observable<Card[]> {
    console.log('deck_id', deck);
    return this.http.get<Card[]>(`${this.cardsUrl}${deck['deck_id']}/draw/?count=${deck['remaining']}`);
  }

  // Creates deck of same color cards based on number select by user.
  createDeck(deckSize):Observable<Deck[]> {
    // Choose a random color, black or red
    const color = this.chooseColor();
    let suit, cards = [];
      if (color === 'red') {
        suit = ['H', 'D'];
      } else if (color === 'black') {
        suit = ['C', 'S'];
      } else {
        suit = 'Not color was found'
      }
    const suitSize = deckSize/2;
    // Create array of cards
    suit.forEach(s => {
      for (let step = 0; step < suitSize; step++) {
        switch (step) {
          case 0:
            cards.push(`A${s}`);
            break;
          case 10:
            cards.push(`J${s}`);
            break;
          case 11:
            cards.push(`Q${s}`);
            break;
          case 12:
            cards.push(`K${s}`);
            break;
          default:
            cards.push(`${step + 1}${s}`);
            break;
        }
      }
    });

    // Make api call to get cards
    const cardsString = cards.toString();
    const url = `${this.cardsUrl}${this.newDeck}shuffle/?cards=${cardsString}`;
    console.log('url', url);
    
    return this.http.get<Deck[]>(`${url}`);
  }

  chooseColor() {
    const colors = ['red', 'black'];
    return colors[Math.floor(Math.random()*colors.length)];
  }
}
