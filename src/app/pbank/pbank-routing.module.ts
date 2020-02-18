import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PbankPage } from './pbank.page';

const routes: Routes = [
  { path: '',component: PbankPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PbankPageRoutingModule {}
