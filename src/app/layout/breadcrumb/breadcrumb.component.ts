/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2018-10-19 12:00:56
 * @LastEditors: zb
 * @LastEditTime: 2019-10-28 00:20:00
 */
import { Component, OnInit, Input, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { LayoutService } from '../layout/layout.service';
import { RouterNode } from '@core/class-modal';

@Component({
  selector: 'xyz-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {

  rNodes = [new RouterNode('首页','index'), new RouterNode('菜单管理', 'menu')]

  private routerContainer: HTMLUListElement
  
  constructor(private laySev: LayoutService, private el: ElementRef<HTMLUListElement>, private render: Renderer2 ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // 设置操作工具的样式
    const els: NodeListOf<Element> = this.el.nativeElement.querySelectorAll<Element>('.xyz-breadcrumb-tools li')
    for(let i = 0; i < els.length; i++) {
      els.item(i).addEventListener('click', (e: MouseEvent) => {
         for(let i = 0; i< els.length; i++) {
          const element = els.item(i);
          if(element.classList.contains('active')) {
            element.classList.remove('active')
          }
         }
        els.item(i).classList.toggle('active')
      })
    }

    // 设置URL列表的样式
    this.routerContainer = this.el.nativeElement.querySelector<HTMLUListElement>('.xyz-breadcrumb-path .xyz-breadcrumb-path-container')
    this.routerContainer.addEventListener('resize', (e: Event) =>{
      console.log(this.routerContainer)
    })

  }


  fullScreen() {
      this.laySev.contentFull = !this.laySev.contentFull;
  }



  addNode() {
    console.log(this.routerContainer.getBoundingClientRect())
    this.rNodes.push(new RouterNode('座位管理','desktop'))
  }

}
