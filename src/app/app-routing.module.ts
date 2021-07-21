import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: (): Promise<any> =>
      import('./modules/products/products.module').then((m) => m.ProductsModule)
  },
  {
    path: 'factors',
    loadChildren: (): Promise<any> =>
      import('./modules/factors/factors.module').then((m) => m.FactorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
