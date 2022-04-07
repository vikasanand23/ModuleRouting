import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FedexSummaryComponent } from './fedex-summary.component';

const routes: Routes = [
  {
    path: '',
    component: FedexSummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FedexSummaryRoutingModule {}
