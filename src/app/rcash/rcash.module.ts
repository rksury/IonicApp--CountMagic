import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RcashPageRoutingModule } from './rcash-routing.module';

import { RcashPage } from './rcash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RcashPageRoutingModule
  ],
  declarations: [RcashPage]
})
export class RcashPageModule {}
