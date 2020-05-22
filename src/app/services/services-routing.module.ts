import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpoRyuComponent } from './spo-ryu/spo-ryu.component'
import { ScoutingComponent } from './scouting/scouting.component';


const routes: Routes = [
  { path: 'spo-ryu', component: SpoRyuComponent },
  { path: 'scouting', component: ScoutingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
