import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { PeopleComponent } from './components/people/people.component';
import { PeoplesComponent } from './components/peoples/peoples.component';

const routes: Routes = [
  {
    path: "films",
    component: FilmsComponent
  },
  {
    path: "peoples",
    component: PeoplesComponent
  },
  {
    path: "peoples/:id",
    component: PeopleComponent
  },
  {
    path: "**",
    redirectTo: "films"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
