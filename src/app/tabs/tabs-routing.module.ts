import{NgModule}from'@angular/core';
import {RouterModule, Routes}from '@angular/router';
import {TabsPage}from './tabs.page';

const routes: Routes = [
{
path: 'tabs',
component: TabsPage,
children: [
{
path: 'home',
children: [
{
path: '',
loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },

        {
        path: 'nonempform',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../nonempform/nonempform.module').then(m => m.NonempformPageModule)
          }
        ]
      },

    {
        path: 'empform',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../empform/empform.module').then(m => m.EmpformPageModule)
          }
        ]
    },

    {
        path: 'businessform',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../businessform/businessform.module').then(m => m.BusinessformPageModule)
          }
        ]
      },



      {
        path: 'payment',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'receive',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },


      {
        path: 'pcash',
        children: [
          {
             path: '',
              loadChildren: () =>
                import('../pcash/pcash.module').then( m => m.PcashPageModule)
          }
        ]
      },
      {
        path: 'pbank',
        children: [
          {
             path: '',
              loadChildren: () =>
                import('../pbank/pbank.module').then( m => m.PbankPageModule)
          }
        ]
      },
      {
        path: 'pcheque',
        children: [
          {
             path: '',
              loadChildren: () =>
                import('../pcheque/pcheque.module').then( m => m.PchequePageModule)
          }
        ]
      },
      {
        path: 'ppaytm',
        children: [
          {
             path: '',
              loadChildren: () =>
                import('../ppaytm/ppaytm.module').then( m => m.PpaytmPageModule)
          }
        ]
      },

{
        path: 'rcash',
        children: [
          {
             path: '',
              loadChildren: () =>
                import('../rcash/rcash.module').then( m => m.RcashPageModule)
          }
        ]
      },
      {
        path: 'rbank',
        children: [
          {
             path: '',
              loadChildren: () =>
                import('../rbank/rbank.module').then( m => m.RbankPageModule)
          }
        ]
      },
      {
        path: 'rcheque',
        children: [
          {
             path: '',
              loadChildren: () =>
                import('../rcheque/rcheque.module').then( m => m.RchequePageModule)
          }
        ]
      },
      {
        path: 'rpaytm',
        children: [
          {
             path: '',
              loadChildren: () =>
                import('../rpaytm/rpaytm.module').then( m => m.RpaytmPageModule)
          }
        ]
      },




      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
