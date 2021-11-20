import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  id:number
  news:News

  constructor(private route: ActivatedRoute,private newsService:NewsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.newsService.getNewsById(this.id).subscribe(response=>{
      this.news=response
    })
  }



}
