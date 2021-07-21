import { Type } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextComponent } from './components/input-text/input-text.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonComponent } from './components/button/button.component';
import { FactorFormComponent } from './components/factor-form/factor-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FactorDetailComponent } from './components/factor-detail/factor-detail.component';

export const COMPONENTS: Type<any>[] = [
  NavbarComponent,
  InputTextComponent,
  DropdownComponent,
  ButtonComponent,
  FactorFormComponent,
  ProductFormComponent,
  FactorDetailComponent
];

export const PRIME_MODULES: Type<any>[] = [
  ButtonModule,
  DialogModule,
  InputTextModule,
  InputNumberModule,
  DropdownModule,
  DropdownModule,
  CheckboxModule,
  RippleModule,
  KeyFilterModule
];
