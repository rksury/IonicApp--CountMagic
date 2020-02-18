import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonempformPage } from './nonempform.page';

const routes: Routes = [
  {
    path: '',
    component: NonempformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonempformPageRoutingModule {}
