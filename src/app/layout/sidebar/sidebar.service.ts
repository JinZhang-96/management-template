/*
 * @Description: TODO
 * @Author: zb
 * @Date: 2019-10-28 00:22:42
 * @LastEditors: zb
 * @LastEditTime: 2019-10-28 19:23:07
 */
import { Injectable } from '@angular/core';

import { HttpClientService } from '@core/services/http-client.service';
import { Observable, pipe, of } from 'rxjs';


const menus = [
  {
      'text': '主导航',
      'group': true,
      'children': [
      {
          'text': '主页',
          'link': '/index',
          'icon': 'anticon anticon-home'
      },
      {
          'text': '快捷菜单',
          'icon': 'icon-rocket',
          'shortcut_root': true,
          'children': []
      }]
  },
  {
      'text': '系统设置',
      'group': true,
      'children': [
      {
          'text': '个人信息管理',
          'link': '/personal',
          'icon': 'fa fa-address-card'
      },
      {
          'text': '用户管理',
          'link': '/menu',
          'icon': 'fa fa-user'
      },
      {
          'text': '码值管理',
          'link': '/code',
          'icon': 'fa fa-pencil'
      }]
  },
  {
      'text': '综合管理',
      'group': true,
      'children': [
      {
          'text': '地图数据管理',
          'link': '/map-data',
          'icon': 'fa fa-map'
      },
      {
          'text': '文章类别管理',
          'link': '/pasType',
          'icon': 'fa fa-bars'
      },
      {
          'text': '文章管理',
          'link': '/passage',
          'icon': 'fa fa-th-large'
      },
      {
          'text': '文章文件管理',
          'link': '/passage-file',
          'icon': 'fa fa-file'
      },
      {
          'text': '相册管理',
          'link': '/photo',
          'icon': 'fa fa-area-chart'
      },
      {
          'text': '音乐管理',
          'link': '/music',
          'icon': 'fa fa-music'
      },
      {
          'text': '留言管理',
          'link': '/comment',
          'icon': 'fa fa-comments'
      },
      {
          'text': '幻灯片管理',
          'link': '/slide',
          'icon': 'fa fa-flash'
      },
      {
          'text': '友情链接管理',
          'link': '/flink',
          'icon': 'fa fa-link'
      }]
  }];



@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClientService ) {

  }


 get  Menus(): Observable<any> {
   return of(menus);
    // return this.http.get('base/menu/get');
  }


}
