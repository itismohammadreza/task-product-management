import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS, PRIME_MODULES } from '.';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...PRIME_MODULES,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [...COMPONENTS, ...PRIME_MODULES, CommonModule, ReactiveFormsModule, FormsModule]
})
export class SharedModule {
}
