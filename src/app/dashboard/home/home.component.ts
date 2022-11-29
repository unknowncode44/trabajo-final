import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { albums } from 'src/app/mock/album.mock';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  showNavigationArrows = true;
	showNavigationIndicators = false;


  imgObjectArray: Album[] = albums;

  images = this.imgObjectArray[0].images.map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
    
  }

 

}
