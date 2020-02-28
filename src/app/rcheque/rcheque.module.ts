import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RchequePageRoutingModule } from './rcheque-routing.module';

import { RchequePage } from './rcheque.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RchequePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [RchequePage]
})
export class RchequePageModule {}
