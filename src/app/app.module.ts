import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './oram/home/home.component';
import { ProductsComponent } from './oram/products/products.component';
import { ShoppingCartComponent } from './oram/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './oram/check-out/check-out.component';
import { OrderSuccessComponent } from './oram/order-success/order-success.component';
import { MyOrdersComponent } from './oram/my-orders/my-orders.component';
import { AdminProductsComponent } from './oram/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './oram/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './oram/login/login.component';
import { BsNavbarComponent } from './oram/bs-navbar/bs-navbar.component';
import { Error404Component } from './oram/error-404/error-404.component';


import { AuthService } from './oram/service/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    BsNavbarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path:'', component:HomeComponent },
      { path:'products', component:ProductsComponent },
      { path:'shopping-cart', component:ShoppingCartComponent },
      { path:'check-out', component:CheckOutComponent },
      { path:'order-success', component:OrderSuccessComponent },
      { path:'my/orders', component:MyOrdersComponent },
      { path:'login', component:LoginComponent },
      { path:'admin/products', component:AdminProductsComponent },
      { path:'admin/orders', component:AdminOrdersComponent },

      { path:'**', component:Error404Component }
    ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
