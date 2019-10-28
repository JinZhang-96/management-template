/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-10-28 00:22:42
 * @LastEditors: zb
 * @LastEditTime: 2019-10-28 19:51:27
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './sidebar/nav/nav.component';
import { SubNavComponent } from './sidebar/nav/sub-nav/sub-nav.component';
/**          自定义模块  */

import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [HeaderComponent, SidebarComponent, LayoutComponent, BreadcrumbComponent, ContentComponent, NavComponent, SubNavComponent]
})
export class LayoutModule { }
