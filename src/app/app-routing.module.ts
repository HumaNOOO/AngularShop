import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ItemDetailComponent} from "./components/item-detail/item-detail.component";
import {ItemListComponent} from "./components/item-list/item-list.component";
import {CartComponent} from "./components/cart/cart.component";

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'shop/info/:id', component: ItemDetailComponent},
  {path: 'shop', component: ItemListComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
