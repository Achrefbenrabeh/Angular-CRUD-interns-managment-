import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { RouterLink } from '@angular/router';
import { ErrorComponent } from './cvTech/error/error.component';
import { LoginComponent } from './login/login.component';
import { HttpComponent } from './http/http.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './cvTech/home/home.component';
import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './guard/auth.guard';
import { LogouthGuard } from './guard/logout.guard';


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ItemCvComponent,
    ListeCvComponent,
    DefaultImagePipe,
    HeaderComponent,
    AddCvComponent,
    DetailComponent,
    ErrorComponent,
    LoginComponent,
    HttpComponent,
    HomeComponent,
    UpdateCvComponent,
    SearchComponent,
    DetailCvComponent
 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    RouterLink,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    LogouthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
