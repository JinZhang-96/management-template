import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'xyz-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {


  /**
   *  一个基于json数据配置的简易表格
   */

  /**
   * 获取数据的函数
   */
  @Input('getData') getData: Function;

  constructor() { }

  ngOnInit() {
  }

  get data() {
    return '1';
   // return  (this.getData.call(this,{'index':1 }) as Observable<any>).subscribe(next =>next, error =>  error)
  }


}
