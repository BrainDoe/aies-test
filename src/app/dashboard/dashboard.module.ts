import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MainComponent, TopbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class DashboardModule {}
