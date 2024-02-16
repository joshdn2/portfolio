import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './home/logo/logo.component';
import { ProfessionalLinkComponent } from './home/professional-link/professional-link.component';
import { PersonalLinkComponent } from './home/personal-link/personal-link.component';
import { HomeGraphicComponent } from './home/home-graphic/home-graphic.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    ProfessionalLinkComponent,
    PersonalLinkComponent,
    HomeGraphicComponent,
    ProfessionalComponent,
    PersonalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
