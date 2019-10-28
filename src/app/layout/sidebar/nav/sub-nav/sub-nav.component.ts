/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-10-28 19:49:47
 * @LastEditors: zb
 * @LastEditTime: 2019-10-28 21:03:04
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xyz-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  @Input('level') level: number;

  @Input('menus') menus: any[];

  constructor() { }

  ngOnInit() {
  }

}
