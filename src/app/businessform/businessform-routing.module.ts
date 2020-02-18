import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessformPage } from './businessform.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessformPageRoutingModule {}
