import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcashPageRoutingModule } from './pcash-routing.module';

import { PcashPage } from './pcash.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PcashPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [PcashPage]
})
export class PcashPageModule {}
