import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from '@modules/layout/components/main-content/main-content.component';
import { ProyectsComponent } from '@modules/layout/components/proyects/proyects.component';

const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'proyects', component: ProyectsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
