/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-10-28 00:22:42
 * @LastEditors: zb
 * @LastEditTime: 2019-11-08 22:30:51
 */
import { Component } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'xyz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private themeService: ThemeService){
    // themeService
  }

}
