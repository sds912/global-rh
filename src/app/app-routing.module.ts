import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadCvComponent } from './pages/download-cv/download-cv.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "cv",
    component: DownloadCvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
