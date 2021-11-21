import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advertisement } from 'src/app/models/advertisement';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  id:number;
  advertisement:Advertisement = new Advertisement();
  constructor(private newsService:NewsService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.newsService.getAdvertById(this.id).subscribe(response => {
        this.advertisement = response;
      }, error => console.log(error));
    }

    onSubmit(){
      this.newsService.updateAdvert(this.id, this.advertisement).subscribe( response=>{
        this.goToAdvertList();
      }
      , error => console.log(error));
    }

    goToAdvertList(){
      this.router.navigate(['/advertisement']);
    }

}
