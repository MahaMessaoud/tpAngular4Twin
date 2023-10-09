import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { NavInvoiceComponent } from './nav-invoice/nav-invoice.component';
import { HeaderComponent } from './header/header.component';
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  // { path: 'nav', component: NavInvoiceComponent },
  // //{ path: '', redirectTo: 'nav', pathMatch: 'full' },// pour le workshop

  // {
  //   path: 'mainInvoice',
  //   component: MainInvoiceComponent,
  //   children: [
  //     { path: '', component: InvoiceListComponent },
  //     { path: 'invoice/:idFacture/:active', component: InvoiceComponent },
  //     { path: 'Invoice', component: InvoiceComponent },
  //   ],
  // },
  {
    path: 'header',
    component: HeaderComponent,
    children: [
      {
        path: 'mainUser',
        component: MainUserComponent,
        children: [
          { path: 'listuser', component: ListUserComponent },
          { path: 'listCat/:category', component: ListUserComponent },
        ],
      },
      { path: 'productManagment', component: MainProductComponent },

      { path: 'providerManagment', component: MainProviderComponent },
      //{ path: 'listuser', component: ListUserComponent },
      { path: '**', component: HomeComponent },
    ],
  },
  { path: '', redirectTo: 'header', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
