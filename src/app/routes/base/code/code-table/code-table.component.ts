import {Component, OnInit} from '@angular/core';

import {ModalService} from '@core/services/modal.service';

import {NzModalService} from 'ng-zorro-antd';
import {OnClickCallback} from 'ng-zorro-antd/modal/nz-modal.type';
import {CodeTableService} from './code-table.service';

@Component({
  selector: 'xyz-code-table',
  templateUrl: './code-table.component.html',
  styleUrls: ['./code-table.component.scss']
})
export class CodeTableComponent implements OnInit {

  constructor(private codeSev: CodeTableService) {
  }

  ngOnInit() {
  }

  getData = (page) => {
    return this.codeSev.pageGet(page);
  };

  add() {
    // this.modalSev.open(CodeTableComponent, null, 'md');
    // this.s.create( {nzContent: CodeTableComponent})
  }


}
