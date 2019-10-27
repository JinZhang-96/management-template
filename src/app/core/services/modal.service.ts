import {Injectable} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {Observable} from 'rxjs';
import {NzModalRef} from 'ng-zorro-antd/modal/nz-modal-ref.class';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal: NzModalService) {
  }

  /**
   * 打开对话框，默认会过滤一些事件的回调，因此更容易处理回调：
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   *
   * 对于组件的成功&关闭的处理说明：
   * 成功：
   * this.subject.destroy('onOk');
   *  若需要回调用参数则：
   *  this.subject.next(data);
   *  this.subject.destroy();
   *
   * 关闭：
   * this.subject.destroy();
   *
   * @param {*} comp 组件
   * @param {*} [params] 组件参数
   * @param {('sm' | 'lg' | '' | number)} [size='lg'] 大小；例如：lg、600，默认：lg
   * @param {*} [options] 对话框ConfigInterface参数
   */
  open(comp: any, params?: any, options?: any): NzModalRef<any> {

    return this.modal
      .create(Object.assign({
        nzContent: comp,
        nzFooter: false,
        nzComponentParams: params
      }, options || {}));
  }

  /**
   * 静态框，点击蒙层不允许关闭
   */
  static(comp: any, options?: any): NzModalRef<any> {
    return this.open(comp, Object.assign({
      nzMaskClosable: false
    }, options));
  }


}
