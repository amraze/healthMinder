import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './admin-dashboard/blogs/blogs.component';
import { CategoriesComponent } from './admin-dashboard/categories/categories.component';
import { DoctorsComponent } from './admin-dashboard/doctors/doctors.component';
import { FaqComponent } from './admin-dashboard/faq/faq.component';
import { GalleryComponent } from './admin-dashboard/gallery/gallery.component';
import { SpecialServicesComponent } from './admin-dashboard/special-services/special-services.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DoctorsPageComponent } from './doctors-page/doctors-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  // Dashboard Routes
  { path: 'admin', redirectTo: 'admin/services', pathMatch: 'full', },
  { path: 'admin/services', component: SpecialServicesComponent },
  { path: 'admin/blogs', component: BlogsComponent },
  { path: 'admin/doctors', component: DoctorsComponent },
  { path: 'admin/faq', component: FaqComponent },
  { path: 'admin/gallery', component: GalleryComponent },
  { path: 'admin/categories', component: CategoriesComponent },
  // Pages Routes
  { path: 'home', component: HomePageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'doctors', component: DoctorsPageComponent },
  { path: 'blogs', component: BlogsPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'contact', component: ContactPageComponent },
  // Error Routes
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
