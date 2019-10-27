import { Injectable } from '@angular/core';

import { HttpClientService } from '@core/services/http-client.service'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClientService ) {

  }


 get  Menus(): Observable<any> {
    return this.http.get('base/menu/get');
  }


}
