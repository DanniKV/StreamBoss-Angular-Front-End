import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {WelcomeComponent} from './welcome/welcome.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {ProductsAddComponent} from './products/products-add/products-add.component';
import {ProductsDetailsComponent} from './products/products-details/products-details.component';
import {ProductsUpdateComponent} from './products/products-update/products-update.component';
import {FooterComponent} from './shared/footer/footer.component';
import {LoginComponent} from './shared/guard/login/login.component';
import {AuthenticationService} from './shared/services/authentication.service';
import { UsersAddComponent } from './users/users-add/users-add.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { UsersUpdateComponent } from './users/users-update/users-update.component';
import {AdminGuard} from './shared/guard/admin.guard';
import {AuthGuard} from './shared/guard/auth.guard';
import { NoAccessComponent } from './shared/no-access/no-access.component';
import {ProductsAdminListComponent} from './products/products-admin-list/products-admin-list.component';
import { FAQComponent } from './faq/faq.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { TradeTermsComponent } from './trade-terms/trade-terms.component';
import { ProductsGraphicsListComponent } from './products/products-graphics-list/products-graphics-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsDetailsComponent,
    ProductsUpdateComponent,
    FooterComponent,
    LoginComponent,
    UsersAddComponent,
    UsersDetailsComponent,
    UsersUpdateComponent,
    NoAccessComponent,
    ProductsAdminListComponent,
    FAQComponent,
    KontaktComponent,
    TradeTermsComponent,
    ProductsGraphicsListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthenticationService,
  AuthGuard,
  AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
