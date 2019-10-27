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
