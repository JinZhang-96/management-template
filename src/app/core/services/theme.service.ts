/*
 * @Description: TODO 风格设置服务
 * @Author: zb
 * @Date: 2019-11-08 21:26:30
 * @LastEditors: zb
 * @LastEditTime: 2019-11-08 23:07:22
 */
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

const themeA = require('assets/styles/themes/_default-theme.scss');

export type ThemeType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private defaultTheme: ThemeType = 'B';

  private styleTag: HTMLStyleElement;

  constructor(@Inject(DOCUMENT) private doc: Document) {
    setTimeout(() => {
      this.createStyle();
      this.setTheme('A');
    }, 100);
  }

  public createStyle() {
    const head = this.doc.head || this.doc.getElementsByTagName('head')[0];
    this.styleTag = this.doc.createElement('style') as HTMLStyleElement;
    this.styleTag.id = 'appthemes';
    head.appendChild(this.styleTag);
  }

  setTheme(name: ThemeType) {
    if (name === this.defaultTheme) {
      return;
    }
    const bodyEl = this.doc.querySelector('body');
    const removeArr = [];
    for (let i = 0; i < bodyEl.classList.length; i++) {
      if (bodyEl.classList[i].startsWith('theme-')) {
        removeArr.push(bodyEl.classList[i]);
      }
    }
    bodyEl.classList.remove(...removeArr);
    bodyEl.classList.add(`theme-${name.toLowerCase()}`);
    const idx = name.charCodeAt(0) - 65;
    this.injectStylesheet([themeA][idx]);
    this.defaultTheme = name;
  }

  injectStylesheet(css) {
    this.styleTag.innerHTML = css;
  }

  getDefaultTheme() {
    return this.defaultTheme;
  }
}
