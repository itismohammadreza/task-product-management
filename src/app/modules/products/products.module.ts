import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { COMPONENTS } from '.';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductService } from '../../core/http/product.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [ProductsRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProductService]
})
export class ProductsModule {
}
