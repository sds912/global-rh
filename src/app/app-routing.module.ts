import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NousComponent } from './pages/nous/nous.component';


const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {path:"nous", component:NousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
