import {Injectable} from '@angular/core';
import {HttpClientService} from '@core/services/http-client.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(private http: HttpClientService) {

  }

  add(menu): Observable<any> {
    return this.http.put('base/menu', menu);
  }


}
