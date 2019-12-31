import { Injectable } from '@angular/core';

import { RouterNode } from '@core/class-modal';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  
  private _rNodes: RouterNode[] = [];

  constructor() { }

  get rNodes(){
    return this._rNodes;
  }

  push(node: RouterNode){
    const hasNode = this._rNodes.some( (n: RouterNode) =>
      n.url === node.url
    )
    if(!hasNode){
      this._rNodes.push(node);
    }
  }

  to(node: RouterNode){

  }

  
}
