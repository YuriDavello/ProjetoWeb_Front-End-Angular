import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/account/user-login/user-login.component';
import { UserRegistrationComponent } from './components/account/user-registration/user-registration.component';
import { CartComponent } from './components/entities/cart/cart.component';
import { DetailsComponent } from './components/entities/details/details.component';
import { MainComponent } from './components/entities/main/main.component';
import { ProductsComponent } from './components/entities/products/products.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';
import { HomeComponent } from './components/layout/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', component: MainComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'details', component: DetailsComponent}
    ]
  },
  
  {
    path: '', component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: UserLoginComponent},
      {path: 'registration', component: UserRegistrationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
