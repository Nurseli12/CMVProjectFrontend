import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  news : News =new News();
  constructor(private newsService:NewsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  saveNews(){
    this.newsService.createNews(this.news).subscribe( response =>{
      console.log(response);
      this.goToNewsList();
    },
    error => console.log(error));
  }

  goToNewsList(){
    this.router.navigate(['/news']);
  }

  onSubmit(){
    console.log(this.news);
    this.saveNews();
  }

}
