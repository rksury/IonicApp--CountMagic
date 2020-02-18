import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RbankPage } from './rbank.page';

const routes: Routes = [
  {
    path: '',
    component: RbankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RbankPageRoutingModule {}
