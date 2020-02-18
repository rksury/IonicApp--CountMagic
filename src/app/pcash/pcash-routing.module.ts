import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcashPage } from './pcash.page';

const routes: Routes = [
  {
    path: '',
    component: PcashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcashPageRoutingModule {}
