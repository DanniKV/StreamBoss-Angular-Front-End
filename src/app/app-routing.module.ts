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
