import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {ProductsAddComponent} from './products/products-add/products-add.component';
import {ProductsDetailsComponent} from './products/products-details/products-details.component';
import {ProductsUpdateComponent} from './products/products-update/products-update.component';
import {LoginComponent} from './shared/guard/login/login.component';
import {UsersAddComponent} from './users/users-add/users-add.component';
import {AdminGuard} from './shared/guard/admin.guard';
import {NoAccessComponent} from './shared/no-access/no-access.component';
import {ProductsAdminListComponent} from './products/products-admin-list/products-admin-list.component';
import {FAQComponent} from './faq/faq.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {TradeTermsComponent} from './trade-terms/trade-terms.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'add',
    component: ProductsAddComponent,
    canActivate: [AdminGuard]},
  {path: 'details/:id', component: ProductsDetailsComponent},
  {path: 'update/:id', component: ProductsUpdateComponent,
   canActivate: [AdminGuard]},
  {path: 'registration', component: UsersAddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'FAQ', component: FAQComponent},
  {path: 'admin-products', component: ProductsAdminListComponent},
  {path: 'contact', component: KontaktComponent},
  {path: 'terms', component: TradeTermsComponent},
  { path: 'no-access',
    component: NoAccessComponent,
    data: { title: 'No Access' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
