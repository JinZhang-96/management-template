/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2018-10-20 11:07:31
 * @LastEditors: zb
 * @LastEditTime: 2019-11-08 23:37:57
 */
import { Component, OnInit, Input, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'xyz-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {

  @Input('menus') menus: any[];


  // 控制菜单是否只能同时打开一个
  @Input('switch') switch: boolean = true

  constructor(private el: ElementRef<HTMLUListElement>, private render: Renderer2) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const els: NodeListOf<HTMLLIElement> = this.el.nativeElement.querySelectorAll<HTMLLIElement>('.xyz-nav-item')
    for (let i = 0; i < els.length; i++) {
      const element = els.item(i)
      element.addEventListener('click', (e: MouseEvent) => {
        e.cancelBubble = true; //  取消事件冒泡
        if (element.classList.contains('xyz-nav-item-close') || element.classList.contains('xyz-nav-item-open')) {
          // 必须是当前元素才可以触发逻辑

          // 如果当前菜单式关闭的，则打开菜单
          if (element.classList.contains('xyz-nav-item-close')) { 
            // 打开菜单之前，先判断同级菜单中是否有打开的菜单
            if(this.switch) {
              if(element.parentElement && element.parentElement.children) {
                const someLevelNodes = element.parentElement.children
                for(let i = 0; i< someLevelNodes.length; i++) {
                  const el: Element = someLevelNodes.item(i)
                  if( el.classList.contains('xyz-nav-item-open') ){
                    el.classList.remove('xyz-nav-item-open')
                    el.classList.add('xyz-nav-item-close')
                  }
                }
              }
            }

            element.classList.remove('xyz-nav-item-close')
            element.classList.add('xyz-nav-item-open')
          } else if (element.classList.contains('xyz-nav-item-open')) {
            const state = e.target === element
              || e.target === element.children[0]
              || e.target === (element.children[0] && element.children[0].children[0])
            if (state) {
              element.classList.remove('xyz-nav-item-open')
              element.classList.add('xyz-nav-item-close')
            }
          }
        } else {
          const selectedItem = this.el.nativeElement.querySelector<HTMLLIElement>('.xyz-nav-item-selected')
          if (selectedItem) {
            selectedItem.classList.remove('xyz-nav-item-selected')
            if (selectedItem !== element) {
              element.classList.add('xyz-nav-item-selected')
            }
          } else {
            element.classList.add('xyz-nav-item-selected')
          }
        }
      });
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
