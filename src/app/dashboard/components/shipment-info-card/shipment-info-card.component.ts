import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment-info-card',
  templateUrl: './shipment-info-card.component.html',
  styleUrl: './shipment-info-card.component.scss',
})
export class ShipmentInfoCardComponent implements OnInit {
  @Input({ required: true }) cardData: any;
  @Input() customStyles: any;

  ngOnInit() {
    console.log(this.cardData);
  }
}
