import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component';
import { CreateAdvertisementComponent } from './components/create-advertisement/create-advertisement.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsComponent } from './components/news/news.component';
import { UpdateAdvertisementComponent } from './components/update-advertisement/update-advertisement.component';
import { UpdateNewsComponent } from './components/update-news/update-news.component';
import { Advertisement } from './models/advertisement';

const routes: Routes = [
  {path:"", component:NewsComponent},
  {path: 'create-news', component: CreateNewsComponent},
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path:"news-details/:id", component:NewsDetailsComponent},
  {path: 'update-news/:id', component: UpdateNewsComponent},
  {path:'advert', component:Advertisement},
  {path:'create-advertisement',component:CreateAdvertisementComponent},
  {path:'advertisement-details/:id',component:AdvertisementDetailsComponent},
  {path:"update-advertisement",component:UpdateAdvertisementComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
