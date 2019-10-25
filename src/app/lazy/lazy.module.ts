import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContentComponent }
];

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
