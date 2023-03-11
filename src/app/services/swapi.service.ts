import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Peoples } from '../models/peoples';
import { Films } from '../models/films';
import { Film } from '../models/film';
import { People } from '../models/people';
@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  readonly API = "https://swapi.dev/api/"; 
  film:Film = new Film();
  constructor(private http:HttpClient) { }

  getFilms(){
    const apiFilms = this.API + "films/"
    // params get info.
    let FILTER = new HttpParams().set("format","json");
    // if not parameters... return all films
    return this.http.get<Films>(apiFilms,{ params: FILTER });
  }
  refreshFilm(film:Film){
    this.film = film;
    return true;
  }
    // // search for name or info
    // if (typeof search != undefined){
    //   FILTER.set('search', `${search}`);
    //   return this.http.get<Films>(apiFilms,{ params: FILTER });
    // }
  getPeoples(page?:String){
    const apiPeoples = this.API + "people/"
    // create params
    let FILTER = new HttpParams().set("format","json");
    return this.http.get<Peoples>(apiPeoples,{ params: FILTER });
  }
  getPeople(peopleId?:String){
    const apiPeople = this.API + "people/" + peopleId;
    // create params
    let FILTER = new HttpParams().set("format","json");
    return this.http.get<People>(apiPeople,{ params: FILTER });
  }

}