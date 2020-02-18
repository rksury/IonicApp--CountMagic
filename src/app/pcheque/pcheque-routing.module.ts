import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PchequePage } from './pcheque.page';

const routes: Routes = [
  {
    path: '',
    component: PchequePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PchequePageRoutingModule {}
