import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  _start: boolean=false;
  constructor(){
  }

  ngOnInit(){
  }

  start(){
    this._start=true;
  }
  clear(){
    this._start=false;
  }
}
