import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PchequePageRoutingModule } from './pcheque-routing.module';

import { PchequePage } from './pcheque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PchequePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PchequePage]
})
export class PchequePageModule {}
