import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/statics/header/header.component';
import { FooterComponent } from './components/statics/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from './components/film/film.component';
import { FilmsComponent } from './components/films/films.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { PeopleComponent } from './components/people/people.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmComponent,
    FilmsComponent,
    PeoplesComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
