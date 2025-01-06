import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [CustomSelectComponent, TableComponent],
  imports: [CommonModule],
  exports: [CustomSelectComponent, TableComponent],
})
export class SharedModule {}
