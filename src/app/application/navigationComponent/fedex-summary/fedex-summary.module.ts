import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FedexSummaryComponent } from './fedex-summary.component';
import { FedexSummaryRoutingModule } from './fedex-summary.routing';
import { CoreModule } from '../../../core/core.module';

@NgModule({
  declarations: [FedexSummaryComponent],
  imports: [CommonModule, FedexSummaryRoutingModule, CoreModule],
})
export class FedexSummaryModule {}
