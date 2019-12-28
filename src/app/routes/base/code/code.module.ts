import { NgModule } from '@angular/core';
import { CodeTableComponent } from './code-table/code-table.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';



const routes: Routes = [
  {
    path: '', component: CodeTableComponent, data: {text: '码值管理', url: '/code' }
  }
];





@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CodeTableComponent],
  entryComponents: [CodeTableComponent]
})
export class CodeModule { }
