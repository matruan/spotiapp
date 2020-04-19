import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

import { map } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: [],
})
export class SearchComponent {
  constructor(private spotify: SpotifyService) {}

  artistas: any[] = [];
  loading: boolean = false;

  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }
}
