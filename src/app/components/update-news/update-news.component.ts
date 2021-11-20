import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  id:number;
  news:News = new News();
  constructor(private newsService:NewsService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.newsService.getNewsById(this.id).subscribe(response => {
        this.news = response;
      }, error => console.log(error));
    }

    onSubmit(){
      this.newsService.updateNews(this.id, this.news).subscribe( response=>{
        this.goToNewsList();
      }
      , error => console.log(error));
    }

    goToNewsList(){
      this.router.navigate(['/news']);
    }

}
