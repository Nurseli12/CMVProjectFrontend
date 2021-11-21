import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advertisement } from 'src/app/models/advertisement';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  advertisement :Advertisement;
  constructor(private newsService:NewsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  saveAdvert(){
    this.newsService.createAdvert(this.advertisement).subscribe( response =>{
      console.log(response);
      this.goToAdvertisementList();
    },
    error => console.log(error));
  }

  goToAdvertisementList(){
    this.router.navigate(['/news']);
  }

  onSubmit(){
    console.log(this.advertisement);
    this.saveAdvert();
  }

}
