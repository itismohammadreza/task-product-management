import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Factor } from '../../shared/models/factor';

@Injectable({
  providedIn: 'root'
})
export class FactorService extends ApiService {
  private readonly endpoint = 'factors';

  get() {
    return this._get(this.endpoint);
  }

  getById(id: number) {
    return this._get(`${this.endpoint}/${id}`);
  }

  post(factor: Factor) {
    return this._post(this.endpoint, factor);
  }

  put(factor: Factor) {
    return this._put(this.endpoint, factor);
  }

  delete(id: number) {
    return this._delete(this.endpoint, id);
  }

}
