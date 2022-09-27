import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactOneComponent } from './contact-one/contact-one.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ToolsComponent } from './tools/tools.component';
import { MeComponent } from './me/me.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { PostsComponent } from './home/posts/posts.component';
import { FlexLayoutModule } from '@angular/flex-layout';



const Ux_Modules = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatGridListModule,
  MatMenuModule,
  FlexLayoutModule
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactOneComponent,
    ContactFormComponent,
    ToolsComponent,
    MeComponent,
    SidenavComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ux_Modules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
