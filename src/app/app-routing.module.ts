import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MusicComponent } from './components/music/music.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SingersComponent } from './components/singers/singers.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'singers', component: SingersComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'music', component: MusicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
