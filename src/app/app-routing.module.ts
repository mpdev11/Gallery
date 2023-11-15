import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawingsComponent } from './drawings/drawings.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { HomeComponent } from './core/home/home.component';
import { PaintingPageComponent } from './painting-page/painting-page.component';

const routes: Routes = [
  { path: 'slike', component: PaintingsComponent },
  { path: 'slike/:id', component: PaintingPageComponent },
  { path: 'crtezi', component: DrawingsComponent },
  { path: 'pocetna', component: HomeComponent },
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
