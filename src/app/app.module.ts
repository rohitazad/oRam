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
//import { DataTableModule } from 'angular-2-data-table';

import { AuthService } from './oram/service/auth-service.service';
import { AuthGuard } from './oram/service/auth-guard.service';
import { UserService } from './oram/service/user.service';
import { AdminAuthGuard } from './oram/service/admin-auth-guard.service';
import { AdminProductFormComponent } from './oram/admin/product-form/product-form.component';
import { CategoryService } from './oram/service/category.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './oram/service/product.service';
import { CustomFormsModule } from 'ng2-validation';
import { ProductFilterComponent } from './oram/products/product-filter/product-filter.component';
import { ProductCartComponent } from './oram/product-cart/product-cart.component';
import { ShoppingCartService } from './oram/service/shopping-cart.service';
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
    Error404Component,
    AdminProductFormComponent,
    ProductFilterComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    //DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path:'', component:ProductsComponent },
      { path:'products', component:ProductsComponent },
      { path:'shopping-cart', component:ShoppingCartComponent },
      { path:'login', component:LoginComponent },

      { path:'check-out', component:CheckOutComponent , canActivate:[AuthGuard]},
      { path:'order-success', component:OrderSuccessComponent , canActivate:[AuthGuard] },
      { path:'my/orders', component:MyOrdersComponent  , canActivate:[AuthGuard]},

      
      { 
        path:'admin/products/new', 
        component:AdminProductFormComponent , 
        canActivate:[AuthGuard, AdminAuthGuard]
      },
      { 
        path:'admin/products/:id', 
        component:AdminProductFormComponent , 
        canActivate:[AuthGuard, AdminAuthGuard]
      },
      { 
        path:'admin/products', 
        component:AdminProductsComponent , 
        canActivate:[AuthGuard, AdminAuthGuard]
      },
      { 
        path:'admin/orders', 
        component:AdminOrdersComponent , 
        canActivate:[AuthGuard, AdminAuthGuard]
      },

     // { path:'**', component:Error404Component }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService, // store user for firebase db
    AdminAuthGuard, // admin auth guard service here
    CategoryService, // for category get to data base 
    ProductService, // product service data save upadate remove
    ShoppingCartService // shoppingCartService add to card or remove 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
