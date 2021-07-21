import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { COMPONENTS } from '.';
import { FactorsRoutingModule } from './factors-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [FactorsRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class FactorsModule {
}
