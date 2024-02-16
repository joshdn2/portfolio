import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'professional', component: ProfessionalComponent},
  {path:'personal', component: PersonalComponent},
  // {path: '*', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
