import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TotalAreaWrapperComponent } from './components/total-area-wrapper/total-area-wrapper.component';
import { TotalAreaCardComponent } from './components/total-area-card/total-area-card.component';
import { ShipmentInfoComponent } from './components/shipment-info/shipment-info.component';
import { ShipmentInfoCardComponent } from './components/shipment-info-card/shipment-info-card.component';
import { SharedModule } from '../shared/shared.module';
import { ShippingListComponent } from './components/shipping-list/shipping-list.component';

@NgModule({
  declarations: [
    MainComponent,
    TopbarComponent,
    SidebarComponent,
    WelcomeComponent,
    TotalAreaWrapperComponent,
    TotalAreaCardComponent,
    ShipmentInfoComponent,
    ShipmentInfoCardComponent,
    ShippingListComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
  ],
})
export class DashboardModule {}
