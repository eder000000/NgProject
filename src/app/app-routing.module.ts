import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes: Routes = [
  {path:'', component: HeaderComponent,
  children : [
    {path: 'home', component: HomeComponent}
  ]},
  {path: 'contact-form', component: ContactFormComponent},
  { path: '**', redirectTo: '/header', pathMatch: 'full' }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
