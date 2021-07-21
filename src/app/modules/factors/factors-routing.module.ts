import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactorsListPage } from './pages/factors-list/factors-list.page';
import { FactorModifyPage } from './pages/factor-modify/factor-modify.page';

const routes: Routes = [
  {
    path: '',
    component: FactorsListPage
  },
  {
    path: 'modify',
    component: FactorModifyPage
  },
  {
    path: 'modify/:id',
    component: FactorModifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactorsRoutingModule {
}
