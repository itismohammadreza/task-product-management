import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Global } from '../../global';

export class ApiService {
  private http: HttpClient;
  private baseUrl: string = environment.apiUrl;

  constructor() {
    this.http = Global.Injector.get(HttpClient);
  }

  protected _get(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }

  protected _post(
    endpoint: string,
    data: any
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }

  protected _put(
    endpoint: string,
    data: any
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}/${data.id}`, data);
  }

  protected _delete(
    endpoint: string, id: number
  ): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endpoint}/${id}`);
  }
}
