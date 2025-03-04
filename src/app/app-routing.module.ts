import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnologiesComponent } from '@components/graphs/tecnologies/tecnologies.component';
import { MainContentComponent } from '@modules/layout/components/main-content/main-content.component';

const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'graphs', component: TecnologiesComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
