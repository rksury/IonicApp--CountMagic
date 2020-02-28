import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PbankPageRoutingModule } from './pbank-routing.module';

import { PbankPage } from './pbank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PbankPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PbankPage]
})
export class PbankPageModule {}
