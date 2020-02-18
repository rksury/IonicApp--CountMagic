import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RchequePage } from './rcheque.page';

const routes: Routes = [
  {
    path: '',
    component: RchequePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RchequePageRoutingModule {}
