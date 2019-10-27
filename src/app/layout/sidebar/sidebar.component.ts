import {Component, OnInit} from '@angular/core';

import {LayoutService} from '../layout/layout.service';

import {SidebarService} from './sidebar.service';

import {toTreeData} from '@core/utils/tree-util';

@Component({
  selector: 'xyz-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menus: object[];

  // 属性配置设置
  attr = {
    id: 'id',
    pId: 'pId',
    name: 'name',
    rootId: null
  };

  constructor(public sev: LayoutService, public sideSev: SidebarService) {
  }

  ngOnInit() {
    // this.sideSev.Menus.subscribe(next => {
    //   this.menus = toTreeData(next['data']['menus'], this.attr);
    //   console.log(this.menus)
    // }, error => {
    //   console.log(error);
    // });

  }


  toggleSide() {
    this.sev.asidebarClose = !this.sev.asidebarClose;
  }

}
