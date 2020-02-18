import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PbankPageRoutingModule } from './pbank-routing.module';

import { PbankPage } from './pbank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PbankPageRoutingModule
  ],
  declarations: [PbankPage]
})
export class PbankPageModule {}
