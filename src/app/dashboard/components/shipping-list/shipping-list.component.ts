import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shipping-list',
  templateUrl: './shipping-list.component.html',
  styleUrl: './shipping-list.component.scss',
})
export class ShippingListComponent {
  shippingList: any = [
    {
      trackingId: '#TVR-001',
      courier: {
        name: 'DHL',
        logo: 'assets/images/fedex.png',
      },
      destination: {
        city: 'Lagos, Nigeria',
        flag: 'assets/images/fedex.png',
      },
      category: 'Electronics',
      shippingDate: 'May 26, 2024',
      weight: '2.5 kg',
      status: 'SORTING',
      cost: '$15.00',
    },
    {
      trackingId: '#TVR-002',
      courier: {
        name: 'DHL',
        logo: 'assets/images/fedex.png',
      },
      destination: {
        city: 'Lagos, Nigeria',
        flag: 'assets/images/fedex.png',
      },
      category: 'Electronics',
      shippingDate: 'May 26, 2024',
      weight: '2.5 kg',
      status: 'DELIVERED',
      cost: '$15.00',
    },
    {
      trackingId: '#TVR-003',
      courier: {
        name: 'DHL',
        logo: 'assets/images/fedex.png',
      },
      destination: {
        city: 'Lagos, Nigeria',
        flag: 'assets/images/fedex.png',
      },
      category: 'Electronics',
      shippingDate: 'May 26, 2024',
      weight: '2.5 kg',
      cost: '$15.00',
      status: 'TRANSIT',
    },
  ];
  columns: string[] = [
    'trackingId',
    'courier',
    'category',
    'shippingDate',
    'destination',
    'weight',
    'cost',
    'status',
    'actions',
  ];

  // columns: string[] = [
  //   'TRANCKING ID',
  //   'COURIER',
  //   'CATEGORY',
  //   'SHIPPING DATE',
  //   'DESTINATION',
  //   'WEIGHT',
  //   'COST',
  //   'STATUS',
  //   'ACTIONS',
  // ];
}
