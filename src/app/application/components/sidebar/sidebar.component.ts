import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  editedNav = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectedItem: any;
  subMenu(evt: any): void {
    switch (evt) {
      case 'Summary':
        this.router.navigate(['Application/Summary']);
        this.selectedItem = evt;
        localStorage.setItem('selectedTab', 'Summary');
        break;
      case 'Invoices':
        this.router.navigate(['Application/Invoices']);
        this.selectedItem = evt;
        localStorage.setItem('selectedTab', 'Invoices');
        break;
      case 'Payment':
        // this.router.navigate(['Application/Payment']);
        this.selectedItem = evt;
        localStorage.setItem('selectedTab', 'Payment');
        break;
      case 'Administration':
        // this.router.navigate(['Application/Administration']);
        this.selectedItem = evt;
        localStorage.setItem('selectedTab', 'Administration');
        break;
      case 'Help':
        // this.router.navigate(['Application/Help']);
        this.selectedItem = evt;
        localStorage.setItem('selectedTab', 'Help');
        break;
    }
  }
  isExpanded = true;
  expandBtnClick() {
    this.isExpanded = !this.isExpanded;
    this.toggleSidebar.emit(this.isExpanded);
  }
}
