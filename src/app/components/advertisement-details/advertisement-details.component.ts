import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Advertisement } from 'src/app/models/advertisement';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {

  id:number
  advertisement:Advertisement


  constructor(private route: ActivatedRoute,private newsService:NewsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.newsService.getAdvertById(this.id).subscribe(response=>{
      this.advertisement=response
    })
  }
  getPhoto(id:number) {
    this.newsService.getPhotoById(this.id).subscribe(response => {
      this.advertisement =response
    })
  }

}
