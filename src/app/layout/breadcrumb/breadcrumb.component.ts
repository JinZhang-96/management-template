/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2018-10-19 12:00:56
 * @LastEditors: zb
 * @LastEditTime: 2019-10-28 00:20:00
 */
import { Component, OnInit, Input, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'xyz-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {

  constructor(private laySev: LayoutService, private el: ElementRef<HTMLUListElement>, private render: Renderer2 ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const els = this.el.nativeElement.querySelectorAll<Element>('.xyz-breadcrumb-tools li')
    for(let i = 0; i < els.length; i++) {
      els.item(i).addEventListener('click', (e: MouseEvent) => {
          els.item(i).classList.toggle('active')
      })
    }
    // els.forEach( (element: Element) => { 
    //   element.addEventListener('click', (e: MouseEvent) => {
    //      element.classList.toggle('active')
    //   })
    // })
  }


  fullScreen() {
      this.laySev.contentFull = !this.laySev.contentFull;
  }

}
