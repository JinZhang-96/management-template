import { Injectable } from '@angular/core';

import { RouterNode } from '@core/class-modal';
@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  
  private _rNodes: RouterNode[] = []

  constructor() { }

  get rNodes(){
    return this._rNodes;
  }

  
}
