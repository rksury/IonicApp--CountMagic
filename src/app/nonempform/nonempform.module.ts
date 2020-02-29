import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NonempformPageRoutingModule } from './nonempform-routing.module';

import { NonempformPage } from './nonempform.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NonempformPageRoutingModule,
        ReactiveFormsModule
    ],
    // exports:[NonempformPage],
  declarations: [NonempformPage]
})
export class NonempformPageModule {}
