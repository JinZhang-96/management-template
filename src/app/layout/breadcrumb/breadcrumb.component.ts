/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2018-10-19 12:00:56
 * @LastEditors: zb
 * @LastEditTime: 2019-10-28 00:20:00
 */
import { Component, OnInit, Input, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LayoutService } from '../layout/layout.service';
import { RouterNode } from '@core/class-modal';
import { initChangeDetectorIfExisting } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'xyz-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {

  rNodes = [new RouterNode('首页','index'), new RouterNode('菜单管理', 'menu')]

  private routerContainer: HTMLDivElement

  @ViewChild("breadcrumbPath")
  bp: ElementRef

  @ViewChild("breadcrumbTools")
  bt: ElementRef
  
  constructor(private laySev: LayoutService, private el: ElementRef<HTMLUListElement>, private render: Renderer2 ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // 设置操作工具的样式
    this.initTools()
    this.initPath()
    
  }


  fullScreen() {
      this.laySev.contentFull = !this.laySev.contentFull;
  }



  addNode() {
    console.log(this.routerContainer.getBoundingClientRect())
    this.rNodes.push(new RouterNode('座位管理','desktop'))
  }

  removeNode() {
    console.log(arguments)
    // this.routerContainer.querySelector('xyz-breadcrumb-path-container-nodes').removeChild()
  }

  initTools() {
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
  }

  initPath() {
    // 设置URL列表的样式
    this.routerContainer = this.el.nativeElement.querySelector<HTMLDivElement>('.xyz-breadcrumb-path .xyz-breadcrumb-path-container')
    const pWidth = this.routerContainer.clientWidth;
    // 有子节点插入后
    this.routerContainer.addEventListener('DOMNodeInserted', (e: MutationEvent) => {
      // 判断路由标签是否超出容器的宽度
      e.cancelBubble = true;      
      const cWidth = (e.relatedNode as HTMLUListElement).clientWidth;
      if(cWidth > pWidth && !this.routerContainer.classList.contains('xyz-breadcrumb-path-container-scroll')) {
        this.render.addClass(this.routerContainer, 'xyz-breadcrumb-path-container-scroll')
      }
    })
    //  有节点移除后
    this.routerContainer.addEventListener('DOMNodeRemoved', (e: MutationEvent) => {
      // 判断路由标签是否小于容器的宽度
      e.cancelBubble = true;      
      const cWidth = (e.relatedNode as HTMLUListElement).clientWidth;
      if(cWidth <= pWidth && this.routerContainer.classList.contains('xyz-breadcrumb-path-container-scroll')) {
        this.render.removeClass(this.routerContainer, 'xyz-breadcrumb-path-container-scroll')
      }
    })

  }



  

}
