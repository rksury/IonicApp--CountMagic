import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpformPage } from './empform.page';

const routes: Routes = [
  {
    path: '',
    component: EmpformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpformPageRoutingModule {}
