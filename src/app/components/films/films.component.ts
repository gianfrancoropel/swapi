import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { Films } from 'src/app/models/films';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.sass']
})
export class FilmsComponent implements OnInit {
  films:Films = new Films();
  loading:boolean = true;
  constructor(private swapiService:SwapiService,private _router: Router) {
    this.getAllFilms();
   }
  
  ngOnInit(): void {
  }

  getAllFilms(){
    this.swapiService.getFilms()
    .subscribe(data => {
      this.films.results = data.results.sort((a:Film, b:Film)=> a.episode_id - b.episode_id );
      //remove loading the view
      this.loading = false;
    });
  }
}
