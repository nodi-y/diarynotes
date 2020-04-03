import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmotionsComponent } from './components/emotions/emotions.component';
import { UrgesComponent } from './components/urges/urges.component';
import { ActionsComponent } from './components/actions/actions.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SettingsComponent } from './components/settings/settings.component';

import { SwiperComponent } from 'angular2-useful-swiper';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmotionsComponent,
    UrgesComponent,
    ActionsComponent,
    SkillsComponent,
    DashboardComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SettingsComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { 
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: MyHammerConfig 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

