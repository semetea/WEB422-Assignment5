import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: any;
  albumSub: Subscription = new Subscription

  constructor(private mds: MusicDataService, private route: ActivatedRoute, private msb: MatSnackBar) { }

  ngOnInit(): void {
    this.albumSub = this.route.params.subscribe(params => {
      this.mds.getAlbumById(params['id']).subscribe(data => this.album = data)
    })
  }

  addToFavourites(trackID: any) {
    if (this.mds.addToFavourites(trackID)) {
      this.msb.open("Adding to Favourites...", "Done", { duration: 1500 })
    }
  }

  ngOnDestroy(): void {
    this.albumSub.unsubscribe();
  }

}
