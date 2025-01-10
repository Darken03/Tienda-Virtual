import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent,AppComponent, SlidebarComponent, ],
  imports: [
  BrowserModule,  CommonModule, HttpClientModule, HttpClient, FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
