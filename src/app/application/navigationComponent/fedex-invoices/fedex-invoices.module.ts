import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FedexInvoicesComponent } from './fedex-invoices.component';
import { FedexInvoiceRoutingModule } from './fedex-invoices.routing';
import { FiltersComponent } from './filters/filters.component';
import { EditColumnsComponent } from './edit-columns/edit-columns.component';
import { ViewsComponent } from './views/views.component';

@NgModule({
  declarations: [FedexInvoicesComponent, FiltersComponent, EditColumnsComponent, ViewsComponent],
  imports: [CommonModule, FedexInvoiceRoutingModule],
})
export class FedexInvoicesModule {}
