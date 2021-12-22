import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './module/navbar/navbar.component';
import { OrdersComponent } from './module/orders/orders.component';
import {BookingsComponent} from './module/bookings/bookings.component';
import {TablesComponent} from './module/tables/tables.component';
const routes: Routes = [

  {path:'app-navbar' ,component :NavbarComponent},
  {path:'app-orders' ,component :OrdersComponent},
  {path:'app-bookings' ,component :BookingsComponent},
  {path:'app-tables' ,component :TablesComponent},
//path: 'user/:id'

  {
    path: 'app-orders',
    loadChildren: () => import('./module/orders/orders.component').then(m => m.OrdersComponent)
  },
  {
    path: 'app-bookings',
    loadChildren: () => import('./module/bookings/bookings.component').then(m => m.BookingsComponent)
  },

  {
    path: 'app-tables',
    loadChildren: () => import('./module/tables/tables.component').then(m => m.TablesComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
