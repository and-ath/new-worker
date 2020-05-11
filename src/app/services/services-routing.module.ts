import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpoRyuComponent } from './spo-ryu/spo-ryu.component'


const routes: Routes = [
  { path: 'spo-ryu', component: SpoRyuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
