import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MeComponent } from './me/me.component';


const routes: Routes = [
  {path:'', component: HeaderComponent,
  children : [
    {path: 'home', component: HomeComponent},
    {path: 'me', component: MeComponent}
    
  ]
  },
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
