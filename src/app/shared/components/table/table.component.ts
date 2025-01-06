import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  @Input() columns: any;
  @Input() data: any;

  @Output() actionClick = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.columns);
  }

  getBadgeClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'sorting':
        return 'badge sorting';
      case 'transit':
        return 'badge transit';
      case 'delivered':
        return 'badge delivered';
      default:
        return '';
    }
  }

  onAction(row: any): void {
    this.actionClick.emit(row);
  }
}
