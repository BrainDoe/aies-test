import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-area-card',
  templateUrl: './total-area-card.component.html',
  styleUrl: './total-area-card.component.scss',
})
export class TotalAreaCardComponent {
  @Input({ required: true }) data: any;
}
