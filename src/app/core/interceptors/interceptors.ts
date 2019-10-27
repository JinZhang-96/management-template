import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {ErrorMessageInterceptorService} from './error-message-interceptor.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: ErrorMessageInterceptorService, multi: true},
];
