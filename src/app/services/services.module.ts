import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpoRyuComponent } from './spo-ryu/spo-ryu.component';
import { ServicesRoutingModule } from './services-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../core/shared/shared.module';
import { MaterialModule } from '../core/module/material/material.module';
import { ScoutingComponent } from './scouting/scouting.component';

@NgModule({
  declarations: [
    SpoRyuComponent,
    ScoutingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ServicesRoutingModule,
    MaterialModule,
    ServicesRoutingModule,
    SharedModule,
  ],
})
export class ServicesModule {}
