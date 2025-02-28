import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RbankPageRoutingModule } from './rbank-routing.module';

import { RbankPage } from './rbank.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RbankPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [RbankPage]
})
export class RbankPageModule {}
