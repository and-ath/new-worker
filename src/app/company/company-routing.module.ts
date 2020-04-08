import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PresskitComponent } from './presskit/presskit.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'presskit', component: PresskitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
