import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DoctorsComponent } from './dashboard/doctors/doctors.component';
import { RemindersComponent } from './dashboard/reminders/reminders.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ForumComponent } from './dashboard/forum/forum.component';
import { AllergiesComponent } from './dashboard/allergies/allergies.component';
import { HomepageComponent } from './dashboard/homepage/homepage.component';
import { DefaultLayoutComponent } from './dashboard/default-layout/default-layout.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DoctorsComponent,
    RemindersComponent,
    SettingsComponent,
    ForumComponent,
    AllergiesComponent,
    HomepageComponent,
    DefaultLayoutComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
