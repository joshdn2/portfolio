import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'', component: HomeComponent, title:'Josh Danneman Resume'},
  {path:'professional', component: ProfessionalComponent, title:'Josh Danneman Resume'},
  {path:'personal', component: PersonalComponent, title:'Josh Danneman Resume'},
  {path:'projects', component: ProjectsComponent, title:'Josh Danneman Resume'},
  {path:'contact', component: ContactComponent, title:'Josh Danneman Resume'},
  {path: '*', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
