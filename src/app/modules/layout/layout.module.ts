import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    SideBarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    SideBarComponent,
    MainContentComponent
  ]
})
export class LayoutModule { }
