import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SlidebarComponent],
  imports: [
    BrowserModule,  CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
