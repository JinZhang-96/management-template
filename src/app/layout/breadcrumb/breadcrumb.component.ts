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
import { debug } from 'util';

@Component({
  selector: 'xyz-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {

  rNodes = [new RouterNode('首页','index'), new RouterNode('菜单管理', 'menu')]

  private routerContainer: HTMLDivElement

  // 路由列表的头是否是第一个
  private isFrist: Boolean = true;

  // 路由列表的尾是否是最后一个
  private isLast: Boolean = false;

  // 当前移动到第几个路由标签
  private currentIndex: number = 0;

  // 放标签的容器的宽度
  private pWidth: number;

  @ViewChild("breadcrumbPath")
  bp: ElementRef

  @ViewChild("breadcrumbTools")
  bt: ElementRef

  @ViewChild("breadcrumbRouteNodes")
  brn: ElementRef
  
  constructor(private laySev: LayoutService, private el: ElementRef<HTMLUListElement>, private render: Renderer2 ) { }

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
    this.rNodes.push(new RouterNode('座位管理','desktop'))
    // this.brn.nativeElement.dispatchEvent(new CustomEvent('addNode', { detail: { width: this.brn.nativeElement.clientWidth } }));
  }

  /**
   * 
   * @param e 移除节点
   */
  removeNode(e, i) {
    // this.render.removeChild(this.brn.nativeElement, e.target.parentElement.parentElement);
    this.rNodes.splice(i,1);
    // this.brn.nativeElement.dispatchEvent(new CustomEvent('removeNode', { detail: { width: this.brn.nativeElement.clientWidth } }));
  }

  toLeft(e: any) {
    if(this.isFrist){
      return 
    }
    let left: string = this.brn.nativeElement.style.left;
    left = left ? left === ''? '0px' : left: '0px';
    const nodes = this.brn.nativeElement.querySelectorAll('li');
    this.currentIndex--;
    const offsetLeft = nodes.length > this.currentIndex ? nodes[this.currentIndex].clientWidth: 0;
    console.log(offsetLeft)
    this.isFrist = Number.parseInt(left.substring(0, left.length -1 )) >= 0 ;
    if(!this.isFrist){
      this.render.setStyle(this.brn.nativeElement,'left', (Number.parseInt(left.substring(0, left.length - 2)) + (offsetLeft + 2)) + 'px');
      if(this.isLast){
        this.isLast = false;
      }
      if(this.currentIndex === 0){
        this.isFrist = true;
      }
    }
  }

  toRight(e: any){
    if(this.isLast){
      return 
    }
    // const brnBoundRect = this.brn.nativeElement.getBoundingClientRect();
    // const containerBoundRect = this.el.nativeElement.querySelector<HTMLDivElement>('.xyz-breadcrumb-path .xyz-breadcrumb-path-container')
    // &&  this.el.nativeElement.querySelector<HTMLDivElement>('.xyz-breadcrumb-path .xyz-breadcrumb-path-container').getBoundingClientRect();
    let left: string = this.brn.nativeElement.style.left;
    left = left ? left === ''? '0px' : left: '0px';
    const nodes = this.brn.nativeElement.querySelectorAll('li');
    const offsetLeft = nodes.length > this.currentIndex ? nodes[this.currentIndex++].clientWidth: 0;
    const paddingLeftPx: string = document.defaultView.getComputedStyle(this.routerContainer, null).paddingLeft
    const paddingLeft: number = Number.parseInt(paddingLeftPx.substring(0, paddingLeftPx.length - 2));
    this.isLast = (this.brn.nativeElement.clientWidth + Number.parseInt(left.substring(0, left.length -1 ))) <= this.pWidth - paddingLeft * 2;
    if(!this.isLast){
      this.render.setStyle(this.brn.nativeElement,'left', (Number.parseInt(left.substring(0, left.length - 2)) - (offsetLeft + 2)) + 'px');
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
    // 设置URL列表的样式
    // this.routerContainer = this.el.nativeElement.querySelector<HTMLDivElement>('.xyz-breadcrumb-path .xyz-breadcrumb-path-container')
    // const pWidth = this.routerContainer.clientWidth;
    // 有子节点插入后
    this.routerContainer.addEventListener('DOMNodeInserted', (e: MutationEvent) => {
      // 判断路由标签是否超出容器的宽度
      e.cancelBubble = true;      
      const cWidth = (e.relatedNode as HTMLUListElement).clientWidth;
      // 设置是否显示左右移动的按钮
      if(cWidth > this.pWidth && !this.routerContainer.classList.contains('xyz-breadcrumb-path-container-scroll')) {
        this.render.addClass(this.routerContainer, 'xyz-breadcrumb-path-container-scroll')
      }
    })
    //  有节点移除后
    this.routerContainer.addEventListener('DOMNodeRemoved', (e: MutationEvent) => {
      // 判断路由标签是否小于容器的宽度
      e.cancelBubble = true;      
      const cWidth = (e.relatedNode as HTMLUListElement).clientWidth;
      // 设置是否隐藏左右移动的按钮
      if(cWidth <= this.pWidth && this.routerContainer.classList.contains('xyz-breadcrumb-path-container-scroll')) {
        this.render.removeClass(this.routerContainer, 'xyz-breadcrumb-path-container-scroll')
      }
    })

  }
}
