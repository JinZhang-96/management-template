/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2018-10-20 11:07:31
 * @LastEditors: zb
 * @LastEditTime: 2019-10-28 00:21:26
 */
import { Component, OnInit, Input, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'xyz-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit  {

  @Input('menus') menus;

  constructor(private el: ElementRef<HTMLUListElement>, private render: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      const els: NodeListOf<HTMLLIElement> = this.el.nativeElement.querySelectorAll<HTMLLIElement>('.xyz-nav-item')
      for(let i = 0; i < els.length; i++) {
        const element = els.item(i)
        element.addEventListener('click', (e: MouseEvent) => {
          e.cancelBubble = true; //  取消事件冒泡
          const selectedItem =  this.el.nativeElement.querySelector<HTMLLIElement>('.xyz-nav-item-selected')
          if(selectedItem) {
            selectedItem.classList.remove('xyz-nav-item-selected')
            if(selectedItem !== element) {
              element.classList.add('xyz-nav-item-selected')
            } 
          } else {
            element.classList.add('xyz-nav-item-selected')
          }
          // 必须是当前元素才可以触发逻辑
            if(element.classList.contains('xyz-nav-item-close')) {
              element.classList.remove('xyz-nav-item-close')
              element.classList.add('xyz-nav-item-open')
            } else  if(element.classList.contains('xyz-nav-item-open')) {
              const state = e.target === element 
              || e.target === element.children[0] 
              || e.target === (element.children[0] && element.children[0].children[0]) 
              if(state) {
                element.classList.remove('xyz-nav-item-open')
                element.classList.add('xyz-nav-item-close')
              }
            }
        })
      }
    //   els.forEach( ( element: HTMLLIElement, key: number, parent: NodeListOf<Element>) => { 
    //     element.addEventListener('click', (e: MouseEvent) => {
    //       e.cancelBubble = true; //  取消事件冒泡
    //       const selectedItem =  this.el.nativeElement.querySelector<HTMLLIElement>('.xyz-nav-item-selected')
    //       if(selectedItem) {
    //         selectedItem.classList.remove('xyz-nav-item-selected')
    //         if(selectedItem !== element) {
    //           element.classList.add('xyz-nav-item-selected')
    //         } 
    //       } else {
    //         element.classList.add('xyz-nav-item-selected')
    //       }
    //       // 必须是当前元素才可以触发逻辑
    //         if(element.classList.contains('xyz-nav-item-close')) {
    //           element.classList.remove('xyz-nav-item-close')
    //           element.classList.add('xyz-nav-item-open')
    //         } else  if(element.classList.contains('xyz-nav-item-open')) {
    //           const state = e.target === element 
    //           || e.target === element.children[0] 
    //           || e.target === (element.children[0] && element.children[0].children[0]) 
    //           if(state) {
    //             element.classList.remove('xyz-nav-item-open')
    //             element.classList.add('xyz-nav-item-close')
    //           }
    //         }
    //     })
    // })
  } 
}
