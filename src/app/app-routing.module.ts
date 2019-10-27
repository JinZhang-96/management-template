/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2018-10-20 14:57:22
 * @LastEditors: zb
 * @LastEditTime: 2018-10-20 14:57:22
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LayoutComponent} from './layout/layout/layout.component';
import { SharedModule } from '@shared/shared.module';
import {MenuTableComponent} from './routes/base/menu/menu-table/menu-table.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    //   canActivateChild: [LoginGuard],
    children: [
      {path: '', redirectTo: '', pathMatch: 'full'},
      // {
      //   path: 'index',
      //   component: MenuTableComponent,
      //   data: {text: '主页', breadcrumb: [{icon: 'anticon anticon-home', url: '', text: '主页'}]}
      // },
      {path: 'menu', loadChildren: './routes/base/menu/menu.module#MenuModule'},
      {path: 'code', loadChildren: './routes/base/code/code.module#CodeModule'}
    ]
  }
  // 单页不包裹Layout
  // {path: 'register', component: RegisterComponent, data: {translate: 'register'}},
  // {path: 'login', component: LoginComponent, data: {title: 'login'}},
  // {path: 'forget', component: ForgetComponent, data: {translate: 'forget'}},
  // {path: 'lock', component: LockComponent, data: {translate: 'lock'}},
  // {path: '404', component: Page404Component},
  // {path: '500', component: Page500Component},
  // {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
