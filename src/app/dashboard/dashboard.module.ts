import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { TopbarComponent } from './components/topbar/topbar.component';


@NgModule({
  declarations: [
    MainComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
