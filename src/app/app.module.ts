import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { AboutComponent } from './section/about/about.component';
import { ServicesComponent } from './section/services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialBtnComponent } from './section/social-btn/social-btn.component';
import { FooterComponent } from './section/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    AboutComponent,
    ServicesComponent,
    SocialBtnComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
