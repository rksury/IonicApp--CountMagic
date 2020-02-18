import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RcashPage } from './rcash.page';

const routes: Routes = [
  {
    path: '',
    component: RcashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcashPageRoutingModule {}
