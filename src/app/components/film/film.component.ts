import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { SwapiService } from 'src/app/services/swapi.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.sass']
})
export class FilmComponent implements OnInit {
  @Input() film: Film = new Film();
  constructor(private _router: Router,private swapiService:SwapiService) { }
  
  ngOnInit(): void {
  }
  goToPagePepoples(film:Film){
    this.swapiService.refreshFilm(film);
    this._router.navigate(['peoples']);
  }
}
