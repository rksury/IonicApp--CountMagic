import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HometablePageRoutingModule} from './hometable-routing.module';

import {HometablePage} from './hometable.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HometablePageRoutingModule
    ],
    exports: [
        HometablePage
    ],
    declarations: [HometablePage]
})
export class HometablePageModule {
}
