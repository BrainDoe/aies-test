import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'dashboard' },
    { label: 'Shipment', icon: 'local_shipping' },
    { label: 'Deliveries', icon: 'delivery_dining' },
    { label: 'Analytics', icon: 'analytics' },
    { label: 'Notifications', icon: 'notifications' },
  ];

  activeIndex = 0; // Default the first menu item to active

  setActiveMenu(index: number): void {
    this.activeIndex = index;
  }

  goToProfile() {
    // Navigate to profile
  }

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
