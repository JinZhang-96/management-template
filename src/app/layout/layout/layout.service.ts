/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-10-28 00:22:42
 * @LastEditors: zb
 * @LastEditTime: 2019-11-08 22:05:40
 */
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  /**
   * 侧边栏的关闭状态， 默认为false,展开状态
   * @type {boolean}
   */
  private _asideberClose = false;

  /**
   * 内容区是否全屏
   * @type {boolean}
   // tslint:disable-next-line: no-redundant-jsdoc
   * @private
   */
  private _contentFull = false;


  constructor() {
    
  }


  get asidebarClose(): boolean {
    return this._asideberClose;
  }

  set asidebarClose(value: boolean) {
    this._asideberClose = value;
  }

  get contentFull(): boolean {
    return this._contentFull;
  }

  set contentFull(value: boolean) {
    this._contentFull = value;
  }


}
