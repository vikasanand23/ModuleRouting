import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fedex-summary',
  templateUrl: './fedex-summary.component.html',
  styleUrls: ['./fedex-summary.component.scss'],
})
export class FedexSummaryComponent implements OnInit {
  editColumns = [
    { name: 'Account Number', checked: true, disable: true },
    { name: 'Invoice Number', checked: true, disable: true },
    { name: 'Due Date', checked: false, disable: false },
    { name: 'Invoice Date', checked: false, disable: false },
    { name: 'Invoice Status', checked: false, disable: false },
    { name: 'Invoice Type', checked: false, disable: false },
    { name: 'Original Amount Due', checked: false, disable: false },
    { name: 'Current Balance', checked: false, disable: false },
    { name: 'Payment Status', checked: false, disable: false },
    { name: 'Currency', checked: false, disable: false },
  ];
  constructor() {}

  ngOnInit(): void {
    this.editColumns.forEach(
      (element: any) => {
        if (element.checked === true) {
          this.checkedName.push(element.name);
          this.customSubmitDisable = false;
        }
        // this.checkedName.push('2022' + element);
      },
      (error: any) => {}
    );
  }

  customObj: any = {};
  checkedName: any = [];
  customSubmitDisable = true;
  onColumnChecked(e: any, property: any) {
    if (e.target.checked) {
      this.checkedName.push(property.name);
      this.customSubmitDisable = false;
    } else {
      this.checkedName = this.checkedName.filter(
        (item: any) => item !== property.name
      );

      if (this.checkedName.length === 0) {
        this.customSubmitDisable = true;
      } else {
        this.customSubmitDisable = false;
      }
    }
  }

  columnSubmit() {
    // this.customObj.id = this.id;
    this.customObj.checked = this.checkedName.join();
    debugger;
  }
}
