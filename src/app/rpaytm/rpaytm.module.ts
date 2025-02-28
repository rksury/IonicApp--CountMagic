import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RpaytmPageRoutingModule } from './rpaytm-routing.module';

import { RpaytmPage } from './rpaytm.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RpaytmPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [RpaytmPage]
})
export class RpaytmPageModule {}
