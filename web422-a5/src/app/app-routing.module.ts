import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: "", redirectTo: "/newReleases", pathMatch: "full" },
  { path: "newReleases", component: NewReleasesComponent },
  { path: "album/:id", component: AlbumComponent },
  { path: "artist/:id", component: ArtistDiscographyComponent },
  { path: "search", component: SearchResultComponent },
  { path: "favourites", component: FavouritesComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
