import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advertisement } from 'src/app/models/advertisement';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  advetisement:Advertisement[];
  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit(): void {
    this.getAdvertisement();
  }
  getAdvertisement(){
    this.newsService.getAdvertisement().subscribe(response=>{
      this.advetisement=response
    })
  }
  advertisementDetails(id:number){
    this.router.navigate(['advertisement-details', id]);
  }
  updateAdvertisement(id: number){
    this.router.navigate(['update-advertisement', id]);
  }

  deleteAdvertisement(id:number){
    this.newsService.deleteAdvert(id).subscribe(response =>{
      this.getAdvertisement();
    })
  }


}
