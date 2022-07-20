import { Component, OnInit, OnDestroy } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites: Array<any> = []
  favouritesSub: Subscription = new Subscription

  constructor(private mds: MusicDataService, private msb: MatSnackBar) { }

  ngOnInit(): void {
    this.favouritesSub = this.mds.getFavourites().subscribe(data => this.favourites = data)
    console.log(this.favourites)
  }

  removeFromFavourites(id: any) {
    this.mds.removeFromFavourites(id).subscribe(data => {
      this.favourites = data
      this.msb.open("Removing from Favourites...", "Done", { duration: 1500 })
    })
  }

  ngOnDestroy(): void {
    this.favouritesSub.unsubscribe();
  }

}
