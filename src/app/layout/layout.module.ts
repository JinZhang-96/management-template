import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContentComponent } from './content/content.component';

/**          自定义模块  */

import { SharedModule } from '@shared/shared.module';
import { NavComponent } from './sidebar/nav/nav.component'

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [HeaderComponent, SidebarComponent, LayoutComponent, BreadcrumbComponent, ContentComponent, NavComponent]
})
export class LayoutModule { }
