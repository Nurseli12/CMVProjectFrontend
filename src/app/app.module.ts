import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { AdversitementComponent } from './components/adversitement/adversitement.component';
import { NaviComponent } from './components/navi/navi.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { UpdateNewsComponent } from './components/update-news/update-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    AdversitementComponent,
    NaviComponent,
    NewsDetailsComponent,
    CreateNewsComponent,
    UpdateNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
