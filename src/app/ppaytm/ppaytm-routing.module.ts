import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpaytmPage } from './ppaytm.page';

const routes: Routes = [
  {
    path: '',
    component: PpaytmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpaytmPageRoutingModule {}
