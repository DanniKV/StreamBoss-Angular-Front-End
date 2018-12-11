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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsDetailsComponent,
    ProductsUpdateComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
