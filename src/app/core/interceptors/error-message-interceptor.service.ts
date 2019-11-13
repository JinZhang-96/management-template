import {Injectable} from '@angular/core';
import {of, Observable} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';
import {HttpInterceptor} from '@angular/common/http';
import {
  HttpEvent,
  HttpResponse,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpUserEvent
} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http/src/backend';
import {HttpRequest} from '@angular/common/http/src/request';
import {default as swal} from 'sweetalert2';

// import swal, {SweetAlertType} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    // console.log(req);
    return next.handle(req).pipe(
      mergeMap((event: any) => {
          return this.resumeBusinessError(event);
        }
      ), catchError((res: HttpResponse<any>) => {
        return this.netError(res);
      })
    );

  }


  private netError(res: HttpResponse<any>): Observable<HttpResponse<any>> {

    let m_msg = res['error']['message'];

    let c_msg = res['message'];


    switch (res.status) {
      case 401: // 未登录状态码
        swal({
          title: '请登录！',
          type: 'error',
          text: c_msg,
          confirmButtonText: '确定'
        });
        break;
      case 404:
        swal({
          title: `${m_msg}`,
          type: 'error',
          text: c_msg,
          confirmButtonText: '确定'
        });
        break;
      case 500:
        swal({
          title: `${m_msg}`,
          type: 'error',
          text: c_msg,
          confirmButtonText: '确定'
        });
        break;
      default:
        swal({
          title: '未知错误！',
          type: 'error',
          text: c_msg,
          confirmButtonText: '确定'
        });
        break;
    }
    return Observable.create(observer => observer.error(res));
  }

  private resumeBusinessError(event: any): Observable<any> {
    // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
    // 后台业务错误
    // if (event instanceof HttpResponse && !event.body.status) {
    //   return Observable.create(observer => observer.error(event));
    // }
    // if(event instanceof HttpResponse) {
    //   console.log(event)
    // }
    // 若一切都正常，则后续操作
    return of(event);
  }


}
