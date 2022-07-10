import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
