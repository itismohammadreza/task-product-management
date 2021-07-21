import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService {
  private readonly endpoint = 'products';

  get() {
    return this._get(this.endpoint);
  }

  post(product: Product) {
    return this._post(this.endpoint, product);
  }

  put(product: Product) {
    return this._put(this.endpoint, product);
  }

  delete(id: number) {
    return this._delete(this.endpoint, id);
  }
}
