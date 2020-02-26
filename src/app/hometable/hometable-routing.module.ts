import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HometablePage } from './hometable.page';

const routes: Routes = [
  {
    path: '',
    component: HometablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HometablePageRoutingModule {}
