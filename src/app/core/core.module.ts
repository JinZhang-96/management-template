import {NgModule, Optional, SkipSelf} from '@angular/core';

import {throwIfAlreadyLoaded} from './module-import-guard';

import { SharedModule  } from '@shared/shared.module';

export { HTTP_PREFIX, SERVE_IP } from './constants/constants'


@NgModule({
  imports: [
   SharedModule
  ],
  declarations: [],
  providers: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
