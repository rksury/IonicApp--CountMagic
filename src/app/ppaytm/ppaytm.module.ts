import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpaytmPageRoutingModule } from './ppaytm-routing.module';

import { PpaytmPage } from './ppaytm.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PpaytmPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [PpaytmPage]
})
export class PpaytmPageModule {}
