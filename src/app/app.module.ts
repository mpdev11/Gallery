import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { PaintingComponent } from './painting/painting.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PaintingsComponent,
    PaintingComponent,
    DrawingsComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
