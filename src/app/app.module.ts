import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home.component';
import { ContactComponent} from './contact-component/contact.component';
import { ProductComponent} from './product-component/product.component';
import { ErrorComponent } from './error-component/error.component';

import { ProductService } from './Service/ProductService';

import {appRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
