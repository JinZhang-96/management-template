import { NgModule } from '@angular/core';
import { MenuTableComponent } from './menu-table/menu-table.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '@shared/shared.module';


const routes: Routes = [
  {
    path: '', component: MenuTableComponent
  }
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuTableComponent]
})
export class MenuModule { }
