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

  // Creates the amount of decks needed
  createDeck():Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this.cardsUrl}${this.newDeck}`);
  }

  // Draws a certain number of cards
  drawCards(deck_id):Observable<Card[]> {
    console.log('DECK ID', deck_id);
    
    return this.http.get<Card[]>(`${this.cardsUrl}`);
  }
}
