import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MusicComponent } from './components/music/music.component';
import { SingersComponent } from './components/singers/singers.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { GalleryElementComponent } from './components/gallery-element/gallery-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    GalleryComponent,
    MusicComponent,
    SingersComponent,
    NavMenuComponent,
    GalleryElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
