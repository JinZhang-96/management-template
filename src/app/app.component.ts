/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-10-28 00:22:42
 * @LastEditors: zb
 * @LastEditTime: 2019-11-08 22:30:51
 */
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ThemeService } from '@core/services/theme.service';
import { BreadcrumbService } from '@layout/breadcrumb/breadcrumb.service';
import { RouterNode } from '@core/class-modal';
@Component({
  selector: 'xyz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private breadcSev: BreadcrumbService, private themeService: ThemeService, private router: Router, private activatedRoute: ActivatedRoute){
  }

  ngOnInit() {
    this.router.errorHandler = function(e){
      console.log(e)
    }
    this.router
        .events
        .pipe(
          filter(evt => evt instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map(route => {
            while (route.firstChild) {
              route = route.firstChild;
            }
            return route;
          }),
          filter((route) => route.outlet === 'primary'),
          map(e => e.data)
        ).subscribe( (e: Observable<any>) =>{
           e && e.subscribe(data =>{
             const node = new RouterNode(data['text'], data['url']);
             this.breadcSev.rNodes.push(node);
           })
        })
  }

}
