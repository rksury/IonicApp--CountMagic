import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
// import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
// import {HometablePageModule} from "../hometable/hometable.module";


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        // HometablePageModule,
        RouterModule.forChild([{path: '', component: Tab1Page}])
    ],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA],

    declarations: [Tab1Page]
})
export class Tab1PageModule {
}
