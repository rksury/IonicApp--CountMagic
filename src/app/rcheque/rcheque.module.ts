import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RchequePageRoutingModule } from './rcheque-routing.module';

import { RchequePage } from './rcheque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RchequePageRoutingModule
  ],
  declarations: [RchequePage]
})
export class RchequePageModule {}
