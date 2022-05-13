import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  buttonClicked = false;
  gayLvl = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getGayTest(){
    this.buttonClicked = true;
    
    this.gayLvl = Math.floor(Math.random() * 100);
    console.log(this.gayLvl);
  }

}
