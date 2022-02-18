import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/tender/create/create.component';
import { ListTenderComponent } from './components/tender/list-tender/list-tender.component';
import { UpdateTenderComponent } from './components/tender/update-tender/update-tender.component';
import { FeedbackformComponent } from './components/feedbackform/feedbackform.component';
import { ContractorComponent } from './components/contractor/contractor.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackformComponent,
    ContractorComponent,
    SignUpComponent,
    SignInComponent,
    NavbarComponent,
    CreateComponent,
    ListTenderComponent,
    UpdateTenderComponent,
    ContractorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
