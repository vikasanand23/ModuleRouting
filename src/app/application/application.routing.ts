//
//
// <Copyright file company=KONE LLC>Copyright (c) 2022 by KONE LLC All Rights Reserved</Copyright>
// <Author>Vikas Anand</Author>
// <Developer>Vikas Anand</Developer>
// <LastUpdatedOn>10/03/2022<LastUpdatedOn>
// <summary>KONEis a registered trademark of KONE, LLC in the United States of America and may be registered in other countries; All other trademarks listed herein belong to their respective owners.</summary>
// <Details>
// This software/Source Code is copyrighted by and is the sole property of KONE LLC. All rights, title, ownership, or other interests.
// Any unauthorized use, duplication, transmission, distribution, or disclosure of this software is expressly forbidden.
// </Details>
// <ClassName>application.routing.ts</ClassName>
//
//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        redirectTo: 'Summary',
        pathMatch: 'full',
      },

      {
        path: 'Summary',
        loadChildren: () =>
          import(
            './navigationComponent/fedex-summary/fedex-summary.module'
          ).then((m) => m.FedexSummaryModule),
      },
      {
        path: 'Invoices',
        loadChildren: () =>
          import(
            './navigationComponent/fedex-invoices/fedex-invoices.module'
          ).then((m) => m.FedexInvoicesModule),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
