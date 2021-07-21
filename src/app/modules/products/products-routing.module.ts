import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListPage } from './pages/products-list/products-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
