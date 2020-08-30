import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './home/about/about.component';
import { CompanyModule } from './company/company.module';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';
import { SharedModule } from './core/shared/shared.module';
import { MaterialModule } from './core/module/material/material.module';

import { AngularFirebaseTemplateModule } from 'angular-firebase-template';
import { TermsComponent } from './terms/terms.component';
import { RecruitsComponent } from './home/recruits/recruits.component';
import { VoicesComponent } from './home/voices/voices.component';
import { QuestionComponent } from './home/question/question.component';
import { FeaturesComponent } from './home/features/features.component';
import { PartnersComponent } from './home/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    TermsComponent,
    RecruitsComponent,
    VoicesComponent,
    QuestionComponent,
    FeaturesComponent,
    PartnersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFirebaseTemplateModule.forRoot({}),
    SharedModule,
    MaterialModule,
    CompanyModule,
  ],
  providers: [
    { provide: REGION, useValue: 'asia-northeast1' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
