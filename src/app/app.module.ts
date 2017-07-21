import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainViewComponent } from './components/main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainViewComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
