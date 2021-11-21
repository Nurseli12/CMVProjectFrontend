import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { NaviComponent } from './components/navi/navi.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { UpdateNewsComponent } from './components/update-news/update-news.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { CreateAdvertisementComponent } from './components/create-advertisement/create-advertisement.component';
import { UpdateAdvertisementComponent } from './components/update-advertisement/update-advertisement.component';
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,

    NaviComponent,
    NewsDetailsComponent,
    CreateNewsComponent,
    UpdateNewsComponent,
    AdvertisementComponent,
    CreateAdvertisementComponent,
    UpdateAdvertisementComponent,
    AdvertisementDetailsComponent

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
