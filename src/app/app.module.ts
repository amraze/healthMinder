import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpecialServicesComponent } from './admin-dashboard/users/special-services.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DoctorsComponent } from './admin-dashboard/doctors/doctors.component';
import { BlogsComponent } from './admin-dashboard/blogs/blogs.component';
import { FaqComponent } from './admin-dashboard/faq/faq.component';
import { GalleryComponent } from './admin-dashboard/calendar/gallery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DoctorsPageComponent } from './doctors-page/doctors-page.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { FooterComponent } from './default-layout/footer/footer.component';
import { NavbarComponent } from './default-layout/navbar/navbar.component';
import { ServicesPageComponent } from './login-page/services-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SpecialServicesComponent,
    DoctorsComponent,
    BlogsComponent,
    FaqComponent,
    GalleryComponent,
    HomePageComponent,
    DoctorsPageComponent,
    ServicesPageComponent,
    BlogsPageComponent,
    FaqPageComponent,
    GalleryPageComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
