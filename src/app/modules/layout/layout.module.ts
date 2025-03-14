import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    NavBarComponent,
    MainContentComponent,
    ProyectsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports:[
    NavBarComponent,
    MainContentComponent
  ]
})
export class LayoutModule { }
