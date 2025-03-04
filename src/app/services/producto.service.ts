import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { IRoot } from '../interfaces/iroot';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  httpClient = inject(HttpClient);
  private baseUrl: string = 'https://peticiones.online/api/products';

  constructor() { }

  getAll(): Observable<IRoot> {
    return this.httpClient.get<IRoot>(this.baseUrl);
  }

  getById(_id: string): Promise<IProducto> {
    return lastValueFrom(this.httpClient.get<IProducto>(`${this.baseUrl}/${_id}`))
  }

}
