import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CreateComponent } from './components/tender/create/create.component';
import { ListTenderComponent } from './components/tender/list-tender/list-tender.component';
import { UpdateTenderComponent } from './components/tender/update-tender/update-tender.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'create-tender', component: CreateComponent },
  { path: 'list-tenders', component: ListTenderComponent },
  { path: 'update-tender/:id', component: UpdateTenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
