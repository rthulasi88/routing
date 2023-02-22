import { Routes } from '@angular/router';

import { HomeComponent} from './home-component/home.component'
import { ContactComponent} from './contact-component/contact.component'
import { ProductComponent} from './product-component/product.component'
import { ErrorComponent} from './error-component/error.component'

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];
