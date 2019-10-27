import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';


/** 配置antd 的语言环境  */
/** 配置 angular i18n **/
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

/**
 *   自定义模块的导入
 */
import {LayoutModule} from '@layout/layout.module';
import { SharedModule } from '@shared/shared.module';
import { CoreModule, HTTP_PREFIX, SERVE_IP  } from '@core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule.forRoot(),
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: HTTP_PREFIX, useValue: ''},
    {provide: SERVE_IP, useValue: 'http://127.0.0.1:8080/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
