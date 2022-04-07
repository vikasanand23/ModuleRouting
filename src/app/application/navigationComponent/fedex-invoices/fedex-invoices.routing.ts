import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltersComponent } from './filters/filters.component';
import { FedexInvoicesComponent } from './fedex-invoices.component';
import { ViewsComponent } from './views/views.component';
import { EditColumnsComponent } from './edit-columns/edit-columns.component';

const routes: Routes = [
  {
    path: '',
    component: FedexInvoicesComponent,
    children: [
      {
        path: 'Filter',
        component: FiltersComponent,
      },
      {
        path: 'Views',
        component: ViewsComponent,
      },
      {
        path: 'Edit Column',
        component: EditColumnsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FedexInvoiceRoutingModule {}
