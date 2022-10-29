import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { OverviewComponent } from './shared/components/overview/overview.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { JobOfferComponent } from './shared/components/job-offer/job-offer.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { SectorsComponent } from './shared/components/sectors/sectors.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './shared/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    OverviewComponent,
    AboutUsComponent,
    JobOfferComponent,
    ContactUsComponent,
    SectorsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
