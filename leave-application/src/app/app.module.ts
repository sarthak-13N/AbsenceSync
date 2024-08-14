import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProfilrComponent } from './profilr/profilr.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { LeavecalenderComponent } from './leavecalender/leavecalender.component';
import { CompanyComponent } from './company/company.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    LoginComponent,
    ProfilrComponent,
    LeaverequestComponent,
    LeavehistoryComponent,
    LeavecalenderComponent,
    CompanyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
