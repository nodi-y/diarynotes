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

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CalendarComponent } from './components/calendar/calendar.component';
 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1,
  initialSlide: 0
};

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
    SwiperComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

