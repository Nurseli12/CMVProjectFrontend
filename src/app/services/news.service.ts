import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertisement } from '../models/advertisement';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrl ='http://localhost:2085/api/news/'


  constructor(private httpClient:HttpClient) { }
  getNews():Observable<News[]>{
    let newPath = this.apiUrl + "getAll"
    return this.httpClient.get<News[]>(newPath)
  }
  getNewsById(id:number):Observable<News>{
    let newPath = this.apiUrl +"getByNews/"+id
    return this.httpClient.get<News>(newPath)

  }
  createNews(news: News): Observable<Object>{
    let newPath = this.apiUrl + "add"
    return this.httpClient.post(newPath, news);
  }
  updateNews(id: number, news: News): Observable<Object>{
    let newPath = this.apiUrl + "/update/"+id
    return this.httpClient.put(newPath, news);
  }
  deleteNews(id: number): Observable<Object>{
    let newPath = this.apiUrl +"delete/"+id
    return this.httpClient.delete(newPath);
  }
  getAdvertisement():Observable<Advertisement[]>{
    let apiUrl2 ='http://localhost:2085/api/advertisement/getAllAdverts'
      return this.httpClient.get<Advertisement[]>(apiUrl2)
    }
    createAdvert(advertisement:Advertisement):Observable<Object>{
      let newPath =''
      return this.httpClient.post(newPath,advertisement)
    }
    updateAdvert(id: number,advertisement:Advertisement):Observable<Object>{
      let newPath='';
      return this.httpClient.post(newPath,advertisement)
    }
    deleteAdvert(id: number):Observable<Object>{
      let newPath='';
      return this.httpClient.delete(newPath)
    }
    getAdvertById(id:number):Observable<Advertisement>{
      let newPath = ''
      return this.httpClient.get<Advertisement>(newPath)

    }
    getPhotoById(id:number):Observable<Advertisement>{
      return this.httpClient.get<Advertisement>('');
    }
    // getPlacesById(id:number){
    //   return this.http.get(this.baseUrl+'places/'+id)
    // }





}
