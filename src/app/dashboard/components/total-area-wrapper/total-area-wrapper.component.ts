import { Component } from '@angular/core';

@Component({
  selector: 'app-total-area-wrapper',
  templateUrl: './total-area-wrapper.component.html',
  styleUrl: './total-area-wrapper.component.scss',
})
export class TotalAreaWrapperComponent {
  data: any = [
    {
      title: 'TOTAL REVENUE',
      value: '1,580.00',
      icon: 'attach_money',
      difference: '18.001',
      secondaryIcon: 'arrow_upward',
      differencePercentage: '18.001',
    },
    {
      title: 'TOTAL SHIPMENTS',
      value: '10000',
      icon: 'local_shipping',
      difference: '12.203',
      secondaryIcon: 'arrow_upward',
      differencePercentage: '18.001',
    },
    {
      title: 'TOTAL DELIVERIES',
      value: '3300.00',
      icon: 'attach_money',
      difference: '10.774',
      secondaryIcon: 'arrow_upward',
      differencePercentage: '18.001',
    },
    {
      title: 'TOTAL TRANSACTIONS',
      value: '1,580.00',
      icon: 'sync_alt',
      difference: '10.772',
      secondaryIcon: 'arrow_downward',
      differencePercentage: '18.001',
    },
  ];
}
