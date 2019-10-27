import { Injectable } from '@angular/core';
import { HttpClientService } from '@core/services/http-client.service'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CodeTableService {

  constructor(private http: HttpClientService) { }

  pageGet(page): Observable<any> {
        return this.http.get('base/code', page)
  }

  add(code: object) {

  }

}
