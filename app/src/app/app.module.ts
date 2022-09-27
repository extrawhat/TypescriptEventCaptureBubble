import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildContentComponent } from './child-content/child-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildContentComponent
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
