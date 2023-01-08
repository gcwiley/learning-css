import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {

  cards = [
    {
      title: 'card 1',
      description: 'This is a card',
    },
  ];
}
