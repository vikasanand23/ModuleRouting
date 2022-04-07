import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fedex-invoices',
  templateUrl: './fedex-invoices.component.html',
  styleUrls: ['./fedex-invoices.component.scss'],
})
export class FedexInvoicesComponent implements OnInit {
  InvoiceTab = [{ name: 'Filter' }, { name: 'Edit Column' }, { name: 'Views' }];
  tabWidth = 33.3;
  selectedTab: any;
  constructor() {}

  ngOnInit(): void {
    this.selectedTab = localStorage.getItem('selectedTab');
    if (this.selectedTab === null) {
      localStorage.setItem('selectedTab', 'Filter');
      this.selectedTab = 'Filter';
    }
    console.log(this.selectedTab, 'this.selectedTab');
  }

  clickedMenuItems(evt: any): void {
    console.log(evt.name, 'evt.name');
    switch (evt.name) {
      case 'Filter':
        // this.router.navigate(['Container/Home']);
        this.selectedTab = evt.name;
        localStorage.setItem('selectedTab', evt.name);
        break;
      case 'Edit Column':
        this.selectedTab = evt.name;
        localStorage.setItem('selectedTab', evt.name);
        break;
      case 'Views':
        this.selectedTab = evt.name;
        localStorage.setItem('selectedTab', evt.name);
        break;
    }
  }

  columnSubmit() {
    // this.customObj.id = this.id;
    // this.customObj.checked = this.checkedName.join();
    debugger;
  }
}
