import {Injectable, Inject} from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http';

import {HTTP_PREFIX, SERVE_IP} from '@core/core.module';

import * as moment from 'moment';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(@Inject(HTTP_PREFIX) public  prifix: string, @Inject(SERVE_IP) public serveIp: string, private http: HttpClient) {

  }


  get baseUrl(): string {
    return this.serveIp.concat(this.prifix);
  }


  parseParams(params: any): HttpParams {
    let ret = new HttpParams();
    if (params) {
      // tslint:disable-next-line:forin
      for (const key in params) {
        let _data = params[key];
        // 将时间转化为：时间戳 (秒)
        if (moment.isDate(_data)) {
          _data = moment(_data).unix();
        }
        ret = ret.set(key, _data);
      }
    }
    return ret;
  }

  /**
   * GET请求
   *
   * @param {string} url URL地址
   * @param {*} [params] 请求参数
   */
  get(url: string, params?: any): Observable<any> {
    return this.http
      .get(this.baseUrl.concat(url), {
        params: this.parseParams(params)
      });

  }

  /**
   * POST请求
   *
   * @param {string} url URL地址
   * @param {*} [body] body内容
   * @param {*} [params] 请求参数
   */
  post(url: string, body?: any, params?: any): Observable<any> {

    // sendStatus = sendStatus || POSTSTATUS.SERIALIZE;
    // params = Object.assign( params ||  {}, { sendStatus: sendStatus});
    // const fun = this.randomProgress(this._progress);

    return this.http
      .post(this.baseUrl.concat(url), body || null, {
        params: this.parseParams(params)
      });
  }


  /**
   * DELETE请求
   *
   * @param {string} url URL地址
   * @param {*} [params] 请求参数
   */
  delete(url: string, params?: any): Observable<any> {
    return this.http
      .delete(this.baseUrl.concat(url), {
        params: this.parseParams(params)
      });
  }

  put(url: string, body?: any) {
    return this.http.put(this.baseUrl.concat(url), body);
  }


  patch(url: string, body?: any) {
    return this.http.patch(this.baseUrl.concat(url), body);
  }


}
