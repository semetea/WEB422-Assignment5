import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  results: any;
  searchQuery: string = "";
  searchSub: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private mds: MusicDataService) { }

  ngOnInit(): void {
    this.searchSub = this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q']

      this.mds.searchArtists(this.searchQuery).subscribe(data => {
        this.results = data.artists.items.filter(item => item.images.length > 0)
      })
    })
    console.log(this.results)
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

}
