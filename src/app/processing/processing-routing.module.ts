import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProcessingPage} from './processing.page';

const routes: Routes = [
    {
        path: '',
        component: ProcessingPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProcessingPageRoutingModule {
}
