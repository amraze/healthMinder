import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './admin-dashboard/blogs/blogs.component';
import { DoctorsComponent } from './admin-dashboard/doctors/doctors.component';
import { FaqComponent } from './admin-dashboard/faq/faq.component';
import { GalleryComponent } from './admin-dashboard/calendar/gallery.component';
import { SpecialServicesComponent } from './admin-dashboard/users/special-services.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { DoctorsPageComponent } from './doctors-page/doctors-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './login-page/services-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // Dashboard Routes
  { path: 'admin', redirectTo: 'admin/users', pathMatch: 'full', },
  { path: 'admin/users', component: SpecialServicesComponent },
  { path: 'admin/blogs', component: BlogsComponent },
  { path: 'admin/doctors', component: DoctorsComponent },
  { path: 'admin/faq', component: FaqComponent },
  { path: 'admin/calendar', component: GalleryComponent },
  // Pages Routes
  { path: '', component: HomePageComponent },
  { path: 'login', component: ServicesPageComponent },
  { path: 'doctors', component: DoctorsPageComponent },
  { path: 'blogs', component: BlogsPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'calendar', component: GalleryPageComponent },
  // Error Routes
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
