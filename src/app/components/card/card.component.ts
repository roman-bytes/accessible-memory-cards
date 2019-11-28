import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/Cards'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  flip: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    this.flip = !this.flip
  }

  setFlipClass() {
    let classes = {
      flipped:  this.flip
    }

    return classes;
  }
}
