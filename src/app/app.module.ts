import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpecialServicesComponent } from './admin-dashboard/special-services/special-services.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DoctorsComponent } from './admin-dashboard/doctors/doctors.component';
import { BlogsComponent } from './admin-dashboard/blogs/blogs.component';
import { CategoriesComponent } from './admin-dashboard/categories/categories.component';
import { FaqComponent } from './admin-dashboard/faq/faq.component';
import { GalleryComponent } from './admin-dashboard/gallery/gallery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { DoctorsPageComponent } from './doctors-page/doctors-page.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FooterComponent } from './default-layout/footer/footer.component';
import { NavbarComponent } from './default-layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SpecialServicesComponent,
    DoctorsComponent,
    BlogsComponent,
    CategoriesComponent,
    FaqComponent,
    GalleryComponent,
    HomePageComponent,
    ServicesPageComponent,
    DoctorsPageComponent,
    BlogsPageComponent,
    FaqPageComponent,
    GalleryPageComponent,
    ContactPageComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
