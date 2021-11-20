import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdversitementComponent } from './components/adversitement/adversitement.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsComponent } from './components/news/news.component';
import { UpdateNewsComponent } from './components/update-news/update-news.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:NewsComponent},
  {path: 'create-news', component: CreateNewsComponent},
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path:"news-details/:id", component:NewsDetailsComponent},
  {path: 'update-news/:id', component: UpdateNewsComponent},
  {path:"advert",pathMatch:"full", component:AdversitementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
