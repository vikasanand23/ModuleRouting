import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Application',
    loadChildren: () =>
      import('./application/application.module').then(
        (m) => m.ApplicationModule
      ),
  },
  {
    path: '**',
    redirectTo: 'Application',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
