import { NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},

    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
    },
    {
        path: 'processing',
        loadChildren: () => import('./processing/processing.module').then(m => m.ProcessingPageModule)
    },
  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then( m => m.ExamplePageModule)
  },



];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
