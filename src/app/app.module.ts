/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-10-28 00:22:42
 * @LastEditors: zb
 * @LastEditTime: 2019-10-28 15:49:58
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule, NZ_I18N, zh_CN, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import { MenuFoldOutline, LockOutline, SettingOutline } from '@ant-design/icons-angular/icons';

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

const icons: IconDefinition[] = [ MenuFoldOutline, LockOutline, SettingOutline ];


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
    {provide: SERVE_IP, useValue: 'http://127.0.0.1:8080/'},
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
