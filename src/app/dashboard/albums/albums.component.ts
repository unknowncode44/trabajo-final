import { Component, OnInit } from '@angular/core';
import { albums } from 'src/app/mock/album.mock';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums_: Album[] = albums

  images = this.albums_[0].images.map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void {
  }

  

}
