import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllergiesComponent } from './dashboard/allergies/allergies.component';
import { DoctorsComponent } from './dashboard/doctors/doctors.component';
import { ForumComponent } from './dashboard/forum/forum.component';
import { HomepageComponent } from './dashboard/homepage/homepage.component';
import { RemindersComponent } from './dashboard/reminders/reminders.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // Dashboard Routes
  { path: 'allergies', component: AllergiesComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Global Routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
