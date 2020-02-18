import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessformPageRoutingModule } from './businessform-routing.module';

import { BusinessformPage } from './businessform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessformPageRoutingModule
  ],
  declarations: [BusinessformPage]
})
export class BusinessformPageModule {}
