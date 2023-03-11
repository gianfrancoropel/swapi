import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { Peoples } from 'src/app/models/peoples';
import { SwapiService } from 'src/app/services/swapi.service';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.sass']
})
export class PeoplesComponent implements OnInit {
  
  film:Film = new Film();
  peoples:Peoples = new Peoples();
  peoplesFilter:Peoples = new Peoples();
  listColorEyes:Array<string> = [];
  listColorHair:Array<string> = [];

  //value indicator the result in screen.
  indexSearch = 0;
  loading:boolean = true;
  constructor(private swapiService:SwapiService) {
    this.getFilm()
    this.getPeoples()
    this.peoplesFilter = Object.create(this.peoples);
    setTimeout(() => {
      //add color list in list <ul> filter
      this.colorsFilter();
    }, 500);
   }
  ngOnInit(): void {
    this.eventScrollY();
    //dropdown list
    this.dropdownMenu();
  }
  getFilm(){
    if (this.swapiService.film.created != "") {
    localStorage.setItem('film', `${JSON.stringify(this.swapiService.film)}`)
    return this.film = this.swapiService.film;      
    }
    return this.film = JSON.parse(`${localStorage.getItem('film')}`);
  }
  //get 5 peoples if scroll full
  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  eventScrollY(){
      if (window.scrollY > 40 && this.indexSearch < this.film.characters.length) {
        this.getPeoples()
      }
  }

  // getting peoples
  getPeoples(){
    console.log(this.loading)
    for (let index = this.indexSearch; index < this.indexSearch + 5; index++) {
      let people = this.film.characters[index];
      console.log(people)
      if (people != undefined) {
        people = people.split('https://swapi.dev/api/people/')[1].replace('/','');
        this.swapiService.getPeople(people)
        .subscribe(people => {
          this.peoples.results.push(people)
          this.loading = false;
        })
        // remove element the Array
        this.film.characters = this.film.characters.filter(function(item) {
          return item !== people
        })      
      }
      //add color list in list <ul> filter
      this.colorsFilter();
    }

    this.indexSearch += 5;
  }

  dropdownMenu(){
    const menu = document.querySelectorAll('.filters__list');
      menu.forEach(list => {
        list.addEventListener('click', (e)=>{
        list.classList.toggle('open');
        // move item to up and filter.
        list.querySelectorAll('li')
        .forEach(item => {
          item.addEventListener('click',()=>{            
            list.prepend(item);
            this.filter(item)
          })
        })
      });
    });
  }

  filter(item:Element){
    
    const value = item.textContent;
    console.log(this.peoples);
    //filter peoples
    if (item.parentElement?.id.includes('eye')) {
      this.peoplesFilter.results = this.peoples.results.filter(people => people.eye_color == value);
      return true;
    }
    this.peoplesFilter.results = this.peoples.results.filter(people => people.hair_color == value);
    return true;
    
  }
  colorsFilter(){
    console.log('colorsFilter()')
    this.peoples.results.forEach(people =>{
      //eye color add and not duplicate value in ul
      if(!this.listColorEyes.includes(people.eye_color)) {
          this.listColorEyes.push(people.eye_color);
      }
      //eye color add and not duplicate value in ul
      if(!this.listColorHair.includes(people.hair_color)) {
        this.listColorHair.push(people.hair_color);
      }
    })
  }
  removeFilters(){
    //add all element to array peoples
    this.peoplesFilter.results = this.peoples.results;
  }
  

}
