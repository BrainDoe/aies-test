import { Component } from '@angular/core';

@Component({
  selector: 'app-shipment-info',
  templateUrl: './shipment-info.component.html',
  styleUrl: './shipment-info.component.scss',
})
export class ShipmentInfoComponent {
  notifications = [
    'New order received',
    'Item out of stock',
    'Weekly report available',
  ];
  user = { name: 'John Doe', email: 'john.doe@example.com' };

  cards = [
    {
      title: 'Card 1',
      customTemplate: 'customCard1',
      content: 'This is the first card.',
      customStyles: {
        'grid-column': 'span 2',
        'grid-row': 'span 1',
        'background-color': '#192A3E',
        color: '#fff',
        'min-height': '200px',
      },
      icon: ['attach_money'],
    },
    {
      title: 'Card 2',
      customTemplate: 'customCard2',
      content: 'This is the second card.',
      customStyles: {
        'grid-column': 'span 2',
        'grid-row': 'span 1',
        color: '#fff',
        'min-height': '200px',
      },
      icon: ['attach_money'],
    },
    {
      title: 'Card 3',
      customTemplate: 'customCard3',
      content: 'This is the third card.',
      customStyles: {
        'grid-column': 'span 1',
        'grid-row': 'span 1',
        'min-height': '200px',
      },
      icon: ['attach_money'],
    },
    {
      title: 'Card 4',
      customTemplate: 'customCard4',
      content: 'This is the fourth card.',
      customStyles: {
        'grid-column': 'span 1',
        'grid-row': 'span 1',
        'min-height': '200px',
      },
      icon: ['attach_money'],
    },
  ];
}
