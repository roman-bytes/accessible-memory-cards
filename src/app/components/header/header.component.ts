import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() setDeckSize: EventEmitter<any> = new EventEmitter();
  @Output() drawAllCards: EventEmitter<any> = new EventEmitter();

  constructor() { }
 
  ngOnInit() {
  }

  createDeck(deckSize) {
    this.setDeckSize.emit(deckSize);
  }

  drawCards() {
    this.drawAllCards.emit();
  }
}
