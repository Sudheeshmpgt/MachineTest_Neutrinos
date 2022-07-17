import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminLogoutComponent } from './components/admin-logout/admin-logout.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { OrderComponent } from './components/order/order.component';
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { SearchComponent } from './components/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    AdminLoginComponent,
    AdminAddProductComponent,
    AdminHeaderComponent,
    AdminLogoutComponent,
    ProductInformationComponent,
    OrderComponent,
    AdminregisterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
