import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'adminlogin', component: AdminLoginComponent},
  {path:'adminhome', component: AdminAddProductComponent},
  {path:'product_info', component: ProductInformationComponent},
  {path:'order', component: OrderComponent},
  {path:'adminregister', component: AdminregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
