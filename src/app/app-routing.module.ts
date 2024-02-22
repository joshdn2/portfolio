import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'', component: HomeComponent, title:'Josh Danneman Portfolio'},
  {path:'professional', component: ProfessionalComponent, title:'Professional'},
  {path:'personal', component: PersonalComponent, title:'Personal'},
  {path:'projects', component: ProjectsComponent, title:'Projects'},
  {path:'contact', component: ContactComponent, title:'Contact'},
  {path: '*', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
