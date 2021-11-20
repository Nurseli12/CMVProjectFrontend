import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:News[];
  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.newsService.getNews().subscribe(response =>{
      this.news = response
    })
  }
  newsDetails(id:number){
    this.router.navigate(['news-details', id]);
  }
  updateNews(id: number){
    this.router.navigate(['update-news', id]);
  }

  deleteNews(id:number){
    this.newsService.deleteNews(id).subscribe(response =>{
      this.getNews();
    })
  }


}
