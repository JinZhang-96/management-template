import { Component, OnInit } from '@angular/core';

import {LayoutService} from '../layout/layout.service';
@Component({
  selector: 'xyz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public sev: LayoutService) { }

  ngOnInit() {
  }

  toggleSide() {
    this.sev.asidebarClose = !this.sev.asidebarClose;
  }
}
