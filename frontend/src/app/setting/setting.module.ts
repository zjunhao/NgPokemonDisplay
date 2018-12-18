import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../common/shared/shared.module';


const routes: Routes = [
  { path: '', component: SettingComponent }
];

@NgModule({
  declarations: [
    SettingComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SettingModule { }
