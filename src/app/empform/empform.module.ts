import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpformPageRoutingModule } from './empform-routing.module';

import { EmpformPage } from './empform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpformPageRoutingModule
  ],
  declarations: [EmpformPage]
})
export class EmpformPageModule {}
