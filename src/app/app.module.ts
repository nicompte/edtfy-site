import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoRowComponent } from './demo-row/demo-row.component';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';
import { AppRoutingModule } from './/app-routing.module';
import { EdtfyComponent } from './edtfy/edtfy.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoRowComponent,
    LocaleSwitcherComponent,
    EdtfyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
