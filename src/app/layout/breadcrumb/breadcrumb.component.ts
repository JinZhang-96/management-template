/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2018-10-19 12:00:56
 * @LastEditors: zb
 * @LastEditTime: 2019-10-28 00:20:00
 */
import { Component, OnInit, Input, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LayoutService } from '@layout/layout/layout.service';
import { BreadcrumbService } from '@layout/breadcrumb/breadcrumb.service';

import { RouterNode } from '@core/class-modal';

@Component({
  selector: 'xyz-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {

  private routerContainer: HTMLDivElement

  // 路由列表的头是否是第一个
  private isFrist: Boolean = true;

  // 路由列表的尾是否是最后一个
  private isLast: Boolean = false;

  // 当前移动到第几个路由标签
  private currentIndex: number = 0;

  // 放标签的容器的宽度
  private pWidth: number;

  // 路由标签向左偏移的px单位
  private offsetLeft: number = 0;

  private activeIndex = 0;

  @ViewChild("breadcrumbPath")
  bp: ElementRef

  @ViewChild("breadcrumbTools")
  bt: ElementRef

  @ViewChild("breadcrumbRouteNodes")
  brn: ElementRef
  
  constructor(private laySev: LayoutService, public breadcSev: BreadcrumbService, private el: ElementRef<HTMLUListElement>, private render: Renderer2 ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {

    this.getContainerWidth();
    this.initEventListener();
    // 设置操作工具的样式
    this.initTools();
    this.initPath();
    
  }

  /**
   * 初始化监听函数
   */
  initEventListener() {

    this.brn.nativeElement.addEventListener('addNode', (e) => {
      // 添加节点，判断当前状态是否超过当前容器宽度
      console.log(e);
    })  

    this.brn.nativeElement.addEventListener('removeNode', (e) => {
      // 移除节点，判断当前状态是否小于当前容器宽度
      console.log(e);
    })  
  }


  getContainerWidth(){
    this.routerContainer = this.el.nativeElement.querySelector<HTMLDivElement>('.xyz-breadcrumb-path .xyz-breadcrumb-path-container')
    this.pWidth = this.routerContainer.clientWidth
  }


  fullScreen() {
      this.laySev.contentFull = !this.laySev.contentFull;
  }



  addNode() {
    this.breadcSev.rNodes.push(new RouterNode('座位管理','desktop'));
    // 判断路由标签是否超出容器的宽度 
     const cWidth = this.brn.nativeElement.clientWidth;
    // 设置是否显示左右移动的按钮
    if(!this.routerContainer.classList.contains('xyz-breadcrumb-path-container-scroll') && cWidth > this.pWidth) {
      this.render.addClass(this.routerContainer, 'xyz-breadcrumb-path-container-scroll')
    } else if(cWidth > this.pWidth){
      this.toRight(null);
    }
    if(this.isLast){
      this.isLast = false
    }
  }

  /**
   * 
   * @param e 移除节点
   */
  removeNode(e, i) {
    this.breadcSev.rNodes.splice(i,1);
    // 判断路由标签是否小于容器的宽度 
    const cWidth = this.brn.nativeElement.clientWidth;
    // 设置是否隐藏左右移动的按钮
    if(this.routerContainer.classList.contains('xyz-breadcrumb-path-container-scroll') && cWidth <= this.pWidth) {
        this.render.removeClass(this.routerContainer, 'xyz-breadcrumb-path-container-scroll')
    } else if( this.currentIndex > 0){
        this.toLeft(null);
    }
  }

  /**
   * 
   * @param e 向左移动标签
   */
  toLeft(e: any) {
    if(this.isFrist){
      return 
    }
    const nodes = this.brn.nativeElement.querySelectorAll('li');
    if(nodes.length > this.currentIndex && this.currentIndex > 0){
      const offsetLeft = nodes[--this.currentIndex].clientWidth;
      this.offsetLeft -= offsetLeft + 2;
      this.render.setStyle(this.brn.nativeElement,'transform', `translateX(-${this.offsetLeft}px)`);
      this.isFrist = this.currentIndex === 0;
      if(this.isLast){
        this.isLast = false;
      }
    } 
  }

  /**
   * 
   * @param e 向右移动路由标签
   */
  toRight(e: any){
    if(this.isLast){
      return 
    }
    const cWidth = this.brn.nativeElement.clientWidth;
    const nodes = this.brn.nativeElement.querySelectorAll('li');
    if(nodes.length > this.currentIndex && this.currentIndex > -1 && (cWidth - this.offsetLeft) > this.pWidth){
      const offsetLeft = nodes.length > this.currentIndex ? nodes[this.currentIndex++].clientWidth: 0;
      this.offsetLeft += offsetLeft + 2;
      this.render.setStyle(this.brn.nativeElement,'transform', `translateX(-${this.offsetLeft}px)`);

      this.isLast = this.currentIndex === nodes.length - 1 || this.currentIndex > nodes.length - 1 || (cWidth - this.offsetLeft) > this.pWidth;
      if(this.isFrist){
        this.isFrist = false;
      }
    }
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
    // 有子节点插入后
    // this.routerContainer.addEventListener('DOMNodeInserted', (e: MutationEvent) => {
    //   // 判断路由标签是否超出容器的宽度
    //   e.cancelBubble = true;      
    //   const cWidth = this.brn.nativeElement.clientWidth;
    //   // 设置是否显示左右移动的按钮
    //   if(cWidth > this.pWidth && !this.routerContainer.classList.contains('xyz-breadcrumb-path-container-scroll')) {
    //     this.render.addClass(this.routerContainer, 'xyz-breadcrumb-path-container-scroll')
    //   } else if(cWidth > this.pWidth){
    //     this.toRight(null);
    //   }
    // })
    // //  有节点移除后
    // this.routerContainer.addEventListener('DOMNodeRemoved', (e: MutationEvent) => {
    //   // 判断路由标签是否小于容器的宽度
    //   e.cancelBubble = true;      
    //   const cWidth = this.brn.nativeElement.clientWidth;
    //   // 设置是否隐藏左右移动的按钮
    //   if(cWidth <= this.pWidth && this.routerContainer.classList.contains('xyz-breadcrumb-path-container-scroll')) {
    //     this.render.removeClass(this.routerContainer, 'xyz-breadcrumb-path-container-scroll')
    //   } else if(cWidth > this.pWidth || this.currentIndex > 0){
    //     this.toLeft(null);
    //   }
    // })
  }

  activeRouter(index){
    this.activeIndex = index;
  }
}
