import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { ContactComponent } from './contact/contact.component';
import { PresskitComponent } from './presskit/presskit.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/module/material/material.module';
import { SharedModule } from '../core/shared/shared.module';
import { AngularFirebaseTemplateModule } from 'angular-firebase-template';

@NgModule({
  declarations: [ContactComponent, PresskitComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    FlexLayoutModule,
    AngularFirebaseTemplateModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CompanyModule {}
