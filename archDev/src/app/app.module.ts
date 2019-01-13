import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewComponent } from './review/review.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {ProjectService} from "./project.service";
import {MessageService} from "./message.service";
 @NgModule ({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ReviewComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectDetailComponent,
  ],
  imports: [BrowserModule,
            AppRoutingModule,
            FontAwesomeModule,
            ReactiveFormsModule,
            HttpClientModule
  ],
  providers: [ProjectService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, far);
  }
}
