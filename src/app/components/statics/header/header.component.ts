import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  
  peoples:boolean = false;
  constructor() {
    this.peoples = localStorage.getItem('film') != null;
   }
  ngOnInit(): void {
  }

}
